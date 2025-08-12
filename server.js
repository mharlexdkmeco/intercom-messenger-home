// server.js
const express = require('express');
const app = express();

app.all('/initialize', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json({
        canvas: {
            content: {
                components: [
                    {
                        type: "text",
                        text: "Contact Us",
                        style: "header"
                    },
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