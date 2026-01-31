# Developer Documentation

Interested in building on top of PhoenixCore? Use the following information to set up your environment.

## 📦 Dependency Info
Add the following to your `build.gradle` to use PhoenixCore as a dependency:

```gradle
repositories {
    maven {
        url = "[https://maven.your-link.com](https://maven.your-link.com)" // Update with your maven
    }
}

dependencies {
    implementation "com.phoenixvine:PhoenixCore:${pc_version}"
}

## ⚡ Tesla System
Learn about the architecture and implementation of the wireless energy network.
* **[Tesla Network Internals](development/tesla/)**