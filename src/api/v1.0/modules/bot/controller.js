import mongoose, { Schema } from "mongoose";
import { bot } from "./schema.js";

const convertToLocalString = (str) => {
    return str.toLocaleString("en-US", { timeZone: "Asia/Kolkata" });
}

export const hiOrHello = (req, res, next) => {
    bot.create({
        title: "Hi or Hello method",
        user: "usr"
    });

    res.setHeader("Content-Type", "application/json");
    res.status(200).send({
        success: true,
        message: "Hii there, how can I help you??"
    })
}

export const start = (req, res, next) => {
    bot.create({
        title: "Start method",
        user: "usr"
    });

    res.setHeader("Content-Type", "application/json");
    res.status(200).send({
        success: true,
        message: "Start the journey by getting the information about bot by using '/help'"
    })
}

export const helpBot = (req, res, next) => {
    const helpObj = {
        "/hi or /hello": "for basic gretting",
        "/set-reminder": "to set reminder for you either in sec, min or hr",
        "/current-date-and-time": "to get the current date and time",
        "/bye": "to exit or ending the conversation"
    }

    bot.create({
        title: "Help method",
        user: "usr",
        data: helpObj
    });

    res.setHeader("Content-Type", "application/json");
    res.status(200).send({
        success: true,
        message: "Hey, I am here to help you...This are the commands that can assist you",
        data: helpObj
    })
}

export const setReminder = async (req, res, next) => {
    const time = req.body.time;
    const unit = req.body.unit;

    let minToAdd = time;
    if (unit === "hr") {
        minToAdd *= 60;
    }
    else if (unit === "sec") {
        minToAdd /= 60;
    }

    const timeToRemind = convertToLocalString(new Date(Date.now() + minToAdd * 60 * 1000));

    bot.create({
        title: "Set Reminder",
        user: "usr",
        body: req.body,
        data: {
            "Time to remind": timeToRemind
        }
    });

    res.status(201).send({
        success: true,
        message: `You will get reminded at ${timeToRemind}`
    });
}

export const currentDateAndTime = (req, res, next) => {
    const date = convertToLocalString(new Date());

    bot.create({
        title: "Current Date and Time",
        user: "usr",
        data: {
            "Current Data and Time": date
        }
    });

    res.setHeader("Content-Type", "application/json");
    res.status(200).send({
        success: true,
        message: `Current date and time: ${date}`
    })
}

export const bye = (req, res, next) => {
    bot.create({
        title: "Bye",
        user: "usr"
    });

    res.setHeader("Content-Type", "application/json");
    res.status(200).send({
        success: true,
        message: "Bye bye, see you soon!!!"
    })
}

