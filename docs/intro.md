---
sidebar_position: 1
---

# Intro

Let's discover **Tapper in less than 5 minutes**.

![](https://github.com/tapper-app/assets/blob/main/Banner.png?raw=true)

## Getting Started

Get Started by Understanding how Tapper Work and Why its Created Like This
When You See the Source Code of the Project You will notice that the project built with Several Languages and thats to Cover All Cases for Android Development because not all users has the same Case, May some of them use CLI Commands Only and Others Use Macos UI Only and Others Use Windows Client Only for this Reason Tapper Cover all of these Platforms

Now The Main Core of the Project is the CLI, The Command Line Interface has All ADB Commands and the Questions, Logic of Picking the Questions and Options all of them Built inside The CLI and the Main Reason that The UI Clients Built is to Execute Tapper Commands Only

The Cli has 5 Options to Execute and All of them Built to Pick in a Dropdown Menu Options in case of CLI Case, but when it come from UI it Execute the Commands Directly without Opening the CLI or Picking Anything

## The Problem

Why To Create Tapper, What is the Source of this Idea ?

The Main Purpose of Creating Tapper is the Old Devices, While Developing Android Applications you gonna face an Old, Wierd Devices with Custom Roms
and when you need an Option some of the Settings App you can't search about the Option you need to manually search on the option to find it
or to search on the Developer Options in the Device but Now You dont need to use the Device at all, the Interface can do all of it inside your Laptop

Other Reason Why Tapper built like this is that if you want to Build a Shell Script, you can Execute the Commands without Modifying or Handling each type of the Commands, Now you have one Structure to Execute all of them (Explained Later) 

### What is the Features

- Control Developer Options
- Control General Options
- Control Automatic Testing Options
- Control Testing Options
- Control Android Monkey Testing

## Installation

As we Know Tapper Cli is the Core Code of the Project and The Main Important thing is to Install the Cli on Your Device and This can be Done by the Next Steps

1. Install the Latest Node Version

   - [Node.js](https://nodejs.org/en/download/) version 20.0 or above:

2. Execute the Following Command in Your Device Terminal

```bash
npm i -g tapper-core
```

Now Tapper Installed and You Can Run the CLI to make Sure that Tapper Working Fine

Write the Following Command in Your Terminal to Start Tapper

```bash
npx tapper
```

![](https://github.com/tapper-app/assets/blob/main/Cli.png?raw=true)

## Validating ADB

ADB is the Main Important Part in Tapper and You Need to Install Android Debug Bridge Tool Before You Start Tapper and you Can Follow Android Documentation to See how to Install ADB in a Root Path

[ADB Link](https://developer.android.com/tools/adb)

After Installing ADB You can Open Tapper then Pick Validate ADB Installation to see if its Installed or Not

## Final Step

The Final Step in the Step is To Pick the Client for Your System
1. macOS
2. Windows
3. Linux

After Downloading the Apps You can Continue in the Next Sections

![](https://github.com/tapper-app/assets/blob/main/Screenshot%202024-01-23%20at%208.19.01%E2%80%AFAM.png?raw=true)
