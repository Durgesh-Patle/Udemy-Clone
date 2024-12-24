let express = require('express');
let router = express.Router();

let stripe = require('stripe')(process.env.SECRET_KEY)

router.post('/payment', async (req, res) => {
    try {
        const { items, totalAmount } = req.body;

        // console.log(items);

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: items.map((item) => ({
                price_data: {
                    currency: "inr",
                    product_data: {
                        name: item.title,
                    },
                    unit_amount: item.price * 100,
                },
                quantity: 1,
            })),
            mode: "payment",
            success_url: "http://localhost:5173/success",
            cancel_url: "http://localhost:5173/cancel",
        });

        res.json({ id: session.id });
    } catch (error) {
        console.error("Error creating payment session:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
})

module.exports = router;