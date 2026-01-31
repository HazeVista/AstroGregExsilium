# Tesla System Architecture

The Tesla Network is built on a "Cloud" model where a central `TeslaTowerMachine` acts as the physical buffer for a virtualized energy network identified by a `UUID` (usually the Player/Team ID).

## 📊 Data Persistence: `TeslaTeamEnergyData`
The state of all Tesla Networks is stored in `TeslaTeamEnergyData`, which extends `SavedData`.

- **`TeamEnergy` Class**: Stores the `stored` and `capacity` (using `BigInteger` for extreme values), along with lists of connected hatches (`HatchInfo`) and soul-linked machines.
- **Synchronization**: The `TeslaTowerMachine` periodically (every 20 ticks) syncs its internal `TeslaEnergyBank` state with the `TeamEnergy` data in the cloud.

## 🏗️ Core Components

### `TeslaTowerMachine`
- **Internal Storage**: Uses `TeslaEnergyBank`, a `MachineTrait` that manages a list of `ITeslaBattery`.
- **Registration**: Register itself in `TeslaWirelessRegistry` and `TEAM_TOWER_MAP` to be discoverable by hatches and the binder.
- **Energy Flow**:
    - **Wired**: Standard GT energy hatches connected to the Tower multiblock fill/drain the cloud directly.
    - **Wireless**: Hatches across the world interact with the `TeamEnergy` object associated with the Tower's `ownerTeamUUID`.

### `TeslaEnergyHatchPartMachine`
- These are the `IMultiPart` components that can be placed on any multiblock.
- They look up the `TeamEnergy` data for their configured frequency and perform `fill` or `drain` operations on the cloud's virtual buffer.

### `TeslaWirelessRegistry`
- A central registry that tracks active Tesla Towers and their status. This allows for quick lookups and dimension-aware energy transfer.

## 🔗 The Linking Mechanism: `TeslaBinderItem`
The `TeslaBinderItem` facilitates the connection between machines and the network.

- **Soul-Linking**: Uses `data.toggleSoulLink(teamUUID, level, clickedPos)`. This adds the machine's `BlockPos` to the `TeamEnergy`'s `soulLinkedMachines` list.
- **Energy Injection**: In `TeslaTowerMachine.pushToSoulLinkedMachines()`, the tower iterates through these positions and directly injects energy into the target machine's `IEnergyContainer`.

## 🖥️ UI and Networking
- **`TeslaNetworkDashboardUI`**: A complex UI providing a real-time overview of the network.
- **Data Sync**: The `TeslaBinderItem` uses `inventoryTick` to pull the latest network stats from the server to the client-side `ItemStack` NBT, which the UI then displays.
- **Highlighting**: Uses `TeslaHighlightRenderer` on the client side to provide visual feedback for locating connected machines.
