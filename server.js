// server.js
const express = require('express');
const app = express();

// This route will be called by Intercom when rendering the Messenger Home app
app.get('/initialize', (req, res) => {
    res.json({
        canvas: {
            content: {
                components: [
                    {
                        type: "button",
                        label: "Live Chat",
                        style: "primary",
                        id: "btn_live_chat"
                    },
                    {
                        type: "button",
                        label: "WhatsApp",
                        style: "secondary",
                        id: "btn_whatsapp"
                    },
                    {
                        type: "button",
                        label: "Line",
                        style: "secondary",
                        id: "btn_line"
                    },
                    {
                        type: "button",
                        label: "Telegram",
                        style: "secondary",
                        id: "btn_telegram"
                    }
                ]
            }
        }
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Intercom app running on port ${PORT}`));
