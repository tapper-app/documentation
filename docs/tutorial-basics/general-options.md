---
sidebar_position: 2
---

# General Options

General Options Description (Commands, Params, Usage)

# General Options List
1. Force Dark Mode
2. Toggle Power Saving Mode
3. Toggle Wifi
4. Get Connected Devices
5. Get Connected Devices with Details
6. Install Apk
7. Un Install Application
8. Reboot Device

# Commands Examples

The Command Pattern in General Commands is

```
npx tapper execute-general-options {key} {value}
```

## Commands Shortcuts and Keys
All of the Following Commands Can be Executed from Terminal Directly Without Opening the CLI with a Direct Command, also the Cli Support Dropdown Picker when you run the tapper Command Only without any Params

#### Force Dark Mode

```
npx tapper execute-general-options dark-mode y/n
```

#### Toggle Power Saving Mode

```
npx tapper execute-general-options power y/n
```

#### Toggle Wifi

```
npx tapper execute-general-options wifi y/n
```

#### Get Connected Devices

```
npx tapper execute-general-options device
```


#### Get Connected Devices With Details

```
npx tapper execute-general-options device-details
```

#### Install Apk

```
npx tapper execute-general-options install {Full Path of the Apk}
```


#### UnInstall Apk

```
npx tapper execute-general-options delete {PackageName}
```



#### Reboot Device

```
npx tapper execute-general-options restart
```

