const User = require("../models/User");
const bcrypt = require("bcrypt");

async function registerUser(req, res) {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ error: "Missing required fields." });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ error: "Email already registered." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashedPassword
    });

    await newUser.save();

    res.status(201).json({ message: "User registered successfully." });
  } catch (err) {
    console.error("❌ Error during registration:", err.message);
    res.status(500).json({ error: "Server error." });
  }
}

module.exports = { registerUser };
