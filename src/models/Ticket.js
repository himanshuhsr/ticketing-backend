const mongoose = require('mongoose');

const TicketSchema = new mongoose.Schema(
    {
        title: { type: String, required: true, unique: true },
        description: { type: String, required: true },
        status: { type: String, default: 'open' },
        priority: { type: String, enum: ['low', 'medium', 'high'], default: 'low' },
        assignedTo: { type: String }
    },
    { timestamps: true }
);

module.exports = mongoose.model('Ticket', TicketSchema);
