const { json } = require('express');
const jwt = require('jsonwebtoken');
const Ticket = require('../models/Ticket');
const User = require('../models/User');

const NewTicketController = async (req, res) => {
    const newTicket = new Ticket(req.body);
    try {
        const savedTicket = await newTicket.save();
        return res.status(200).json({
            ticketId: savedTicket._id
        });
    } catch (err) {
        return res.status(500).json(err);
    }
};

const AllTickets = async (req, res) => {
    const qStatus = req.query.status;
    const qTitle = req.query.title;
    const qPriority = req.query.priority;
    try {
        let tickets;
        if (qStatus) {
            tickets = await Ticket.find({
                status: {
                    $eq: qStatus
                }
            });
        } else if (qPriority) {
            tickets = await Ticket.find({
                priority: {
                    $eq: qPriority
                }
            });
        } else if (qTitle) {
            tickets = await Ticket.find({
                title: {
                    $eq: qTitle
                }
            });
        } else {
            tickets = await Ticket.find();
        }
        return res.status(200).json(tickets);
    } catch (err) {
        return res.status(500).json(err);
    }
};

const tickets = async (req, res) => {
    try {
        let tickets = await Ticket.find();
        return res.status(200).json(tickets);
    } catch (err) {
        return res.status(500).json(err);
    }
};

const markAsClosed = async (req, res) => {
    const id = req.body.ticketID;
    const authHeader = req.headers.token;
    let loggedUser = '';

    try {
        let ticket = await Ticket.findById(id);
        if (ticket.assignedTo) {
            if (authHeader) {
                const token = authHeader.split(' ')[1];
                jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
                    if (err) res.status(403).json('Token is not valid!');
                    loggedUser = user;
                });
            } else {
                return res.status(401).json('You are not authenticated!');
            }

            if (loggedUser.username == ticket.assignedTo || loggedUser.isAdmin) {
                let priority = ticket.priority;

                if (priority == 'low') {
                    let allTickets = await Ticket.find({ priority: { $in: ['high', 'medium'] }, assignedTo: loggedUser.username, status: { $eq: 'open' } });

                    if (allTickets.length > 0) {
                        res.status(202).json({ error: 'A higher priority task remains to be closed', allTickets });
                    } else {
                        let updatedTicket = await Ticket.findByIdAndUpdate(id, { $set: { status: 'close' } });
                        if (updatedTicket) {
                            return res.status(200).json(updatedTicket);
                        } else {
                            return res.status(400).json('Some error occured! Try Again!');
                        }
                    }
                } else if (priority == 'medium') {
                    let allTickets = await Ticket.find({ priority: 'high', assignedTo: loggedUser.username, status: 'open' }).exec();
                    if (allTickets.length > 0) {
                        res.status(401).json({ error: 'A higher priority task remains to be closed', allTickets });
                    } else {
                        let updatedTicket = await Ticket.findByIdAndUpdate(id, { $set: { status: 'close' } });
                        if (updatedTicket) {
                            return res.status(200).json(updatedTicket);
                        } else {
                            return res.status(400).json('Some error occured! Try Again!');
                        }
                    }
                } else {
                    let updatedTicket = await Ticket.findByIdAndUpdate(id, { $set: { status: 'close' } });
                    if (updatedTicket) {
                        return res.status(200).json(updatedTicket);
                    } else {
                        return res.status(400).json('Some error occured! Try Again!');
                    }
                }
            } else {
                res.status(401).json('You are not authorized!');
            }
        } else {
            res.status(401).json('You are not authorized!');
        }
        // Now find out all the tickets assigned to the user and check priority
    } catch (err) {
        return res.status(500).json(err);
    }
};

const deleteTicket = async (req, res) => {
    const id = req.body.ticketID;
    try {
        await Ticket.findByIdAndDelete(id);
        res.status(200).json('Ticket has been deleted...');
    } catch (err) {
        res.status(500).json(err);
    }
};

module.exports = {
    newTicket: NewTicketController,
    allTicket: AllTickets,
    tickets: tickets,
    markAsClosed: markAsClosed,
    deleteTicket: deleteTicket
};
