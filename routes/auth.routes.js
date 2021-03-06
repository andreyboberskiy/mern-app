const { Router } = require("express");
const User = require("../models/User");
const router = Router();
const bcrypt = require("bcryptjs");
const { check, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = router;

// api/auth/sign-up
router.post(
  "/sign-up",
  [
    check("email", "Invalid email").isEmail(),
    check("password", "Invalid password").isLength({ min: 8 }),
  ],
  async (req, res) => {
    console.log(req.body);
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res
          .status(400)
          .json({ errors: errors.array(), message: "Invalid data" });
      }

      const { email, password } = req.body;

      const candidate = await User.findOne({ email });

      if (candidate) {
        return res
          .status(400)
          .json({
            message: "Sign up failed",
            validation: { email: "User with this email already exist" },
          });
      }
      const hashedPass = await bcrypt.hash(password, 12);
      const user = new User({ email, password: hashedPass });

      await user.save();
      return res.status(201).json({ message: "User created" });
    } catch (e) {
      res
        .status(500)
        .json({ message: "Что-то пошло не так, сервер упал222", error: e });
    }
  }
);

// api/auth/login
router.post(
  "/sign-in",
  [
    check("email", "Invalid email").normalizeEmail().isEmail(),
    check("password", "Invalid password").exists(),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res
          .status(400)
          .json({ errors: errors.array(), message: "Invalid data" });
      }
      const { email, password } = req.body;
      const user = await User.findOne({ email });

      if (!user) {
        return res.status(400).json({ message: "User not found" });
      }

      const isMatch = bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(400).json({ message: "Password incorrect" });
      }

      const token = jwt.sign({ userId: user.id }, config.get("jwtSecret"), {
        expiresIn: "1h",
      });

      return res.status(200).json({ token, userId: user.id });
    } catch (e) {
      console.log(e);
      res.status(500).json({ message: "Что-то пошло не так, сервер упал" });
    }
  }
);
