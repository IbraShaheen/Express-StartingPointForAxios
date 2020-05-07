// Database
const { Cookie } = require("../db/models");

exports.fetchCookie = async (cookieId, next) => {
  try {
    const cookie = await Cookie.findByPk(cookieId);
    return cookie;
  } catch (error) {
    next(error);
  }
};

exports.cookieCreate = async (req, res, next) => {
  try {
    const newCookie = await Cookie.create(req.body);
    res.status(201).json(newCookie);
  } catch (error) {
    next(error);
  }
};

exports.cookieList = async (req, res, next) => {
  try {
    const cookies = await Cookie.findAll();
    res.json(cookies);
  } catch (error) {
    next(error);
  }
};

exports.cookieDetail = async (req, res) => res.json(req.cookie);

exports.cookieUpdate = async (req, res) => {
  try {
    await req.cookie.update(req.body);
    res.status(204).end();
  } catch (err) {
    next(error);
  }
};

exports.cookieDelete = async (req, res) => {
  try {
    await req.cookie.destroy();
    res.status(204).end();
  } catch (err) {
    next(error);
  }
};
