"use strict";
var __spreadArrays =
  (this && this.__spreadArrays) ||
  function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++)
      s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
        r[k] = a[j];
    return r;
  };
exports.__esModule = true;
exports.App = void 0;
var react_1 = require("react");
require("./App.css");
var Message_1 = require("./components/Message/Message");
var Chat_1 = require("./components/Chat/Chat");
var ChatsList_1 = require("./components/ChatsList/ChatsList");
var moment_1 = require("moment");
var nanoid_1 = require("nanoid");
var defaultMess = [
  {
    id: "1",
    time: moment_1["default"]().format("MMMM Do YYYY, h:mm:ss a"),
    name: "Admin",
    text: "Hello, honey!",
  },
];
exports.App = function () {
  var _a = react_1.useState(defaultMess),
    messages = _a[0],
    setMess = _a[1];
  var addMess = function (text, name) {
    setMess(function (prevMessages) {
      return __spreadArrays(prevMessages, [
        {
          id: nanoid_1.nanoid(),
          name: name,
          time: moment_1["default"]().format("MMMM Do YYYY, h:mm:ss a"),
          text: text,
        },
      ]);
    });
    setTimeout(function () {
      return addBotMess();
    }, 1500);
  };
  var addBotMess = function () {
    setMess(function (prevMessages) {
      return __spreadArrays(prevMessages, [
        {
          id: nanoid_1.nanoid(),
          name: "BOT",
          time: moment_1["default"]().format("MMMM Do YYYY, h:mm:ss a"),
          text: "Привет, это сообщение сгенерировано автоматически!",
        },
      ]);
    });
  };
  return react_1["default"].createElement(
    "div",
    { className: "App" },
    react_1["default"].createElement(
      "header",
      { className: "App-header" },
      "\u041C\u043E\u0435 \u043F\u0435\u0440\u0432\u043E\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435",
      react_1["default"].createElement(
        "h3",
        null,
        "\u041F\u0440\u0438\u0432\u0435\u0442, \u0410\u043D\u0434\u0440\u0435\u0439"
      ),
      react_1["default"].createElement(Message_1.Message, {
        name: "Андрей",
        help: "Игорю Ивановичу",
        phone: "+7 777 777 77 77",
      }),
      react_1["default"].createElement(
        "div",
        { className: "chat_chats" },
        react_1["default"].createElement(ChatsList_1.ChatsList, null),
        react_1["default"].createElement(Chat_1.Chat, {
          messages: messages,
          addMess: addMess,
        })
      )
    )
  );
};
