//#region properties
const $IngotProperty = global.IngotProperty;
const $DustProperty = global.DustProperty;
const $FluidProperty = global.FluidProperty;
const $BlastProperty = global.BlastProperty;
const $FluidPipeProperties = global.FluidPipeProperties;
const $PropertyKey = global.PropertyKey;
const $ToolProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.ToolProperty');
//#endregion

//#region elements
function elemCreator(event, id, p, n,  symbol) {  
        event.create(id)
            .protons(p)
            .neutrons(n)
            .symbol(symbol)
}

GTCEuStartupEvents.registry("gtceu:element", event => {
    const elemCreator = [
        /*["example_element", -1, -1, "Ee"]*/
    ]
})
//#endregion

//#region icon sets
const DULL = GTMaterialIconSet.DULL;
const METALLIC = GTMaterialIconSet.METALLIC;
const MAGNETIC = GTMaterialIconSet.MAGNETIC;
const SHINY = GTMaterialIconSet.SHINY;
const BRIGHT = GTMaterialIconSet.BRIGHT;
const DIAMOND = GTMaterialIconSet.DIAMOND;
const EMERALD = GTMaterialIconSet.EMERALD;
const GEM_HORIZONTAL = GTMaterialIconSet.GEM_HORIZONTAL;
const GEM_VERTICAL = GTMaterialIconSet.GEM_VERTICAL;
const RUBY = GTMaterialIconSet.RUBY;
const OPAL = GTMaterialIconSet.OPAL;
const GLASS = GTMaterialIconSet.GLASS;
const NETHERSTAR = GTMaterialIconSet.NETHERSTAR;
const FINE = GTMaterialIconSet.FINE;
const SAND = GTMaterialIconSet.SAND;
const WOOD = GTMaterialIconSet.WOOD;
const ROUGH = GTMaterialIconSet.ROUGH;
const FLINT = GTMaterialIconSet.FLINT;
const LIGNITE = GTMaterialIconSet.LIGNITE;
const QUARTZ = GTMaterialIconSet.QUARTZ;
const CERTUS = GTMaterialIconSet.CERTUS;
const LAPIS = GTMaterialIconSet.LAPIS;
const FLUID = GTMaterialIconSet.FLUID;
const RADIOACTIVE = GTMaterialIconSet.RADIOACTIVE;
//#endregion



//#region flags
// Generic flags
const no_unify = GTMaterialFlags.NO_UNIFICATION;
const electrolyze = GTMaterialFlags.DECOMPOSITION_BY_ELECTROLYZING;
const centrifuge = GTMaterialFlags.DECOMPOSITION_BY_CENTRIFUGING;
const no_decomp = GTMaterialFlags.DISABLE_DECOMPOSITION;
const explosive = GTMaterialFlags.EXPLOSIVE;
const flammable = GTMaterialFlags.FLAMMABLE;
const sticky = GTMaterialFlags.STICKY;
const phosphorescent = GTMaterialFlags.PHOSPHORESCENT;

//Generation Flags
// Dust Flags
const plates = GTMaterialFlags.GENERATE_PLATE;
const dense_plate = GTMaterialFlags.GENERATE_DENSE;
const rod = GTMaterialFlags.GENERATE_ROD;
const bolt_and_screw = GTMaterialFlags.GENERATE_BOLT_SCREW;
const frame = GTMaterialFlags.GENERATE_FRAME;
const gear = GTMaterialFlags.GENERATE_GEAR;
const long_rod = GTMaterialFlags.GENERATE_LONG_ROD;
const block = GTMaterialFlags.FORCE_GENERATE_BLOCK;

// Ingot Flags
const foil = GTMaterialFlags.GENERATE_FOIL;
const ring = GTMaterialFlags.GENERATE_RING;
const spring = GTMaterialFlags.GENERATE_SPRING;
const small_spring = GTMaterialFlags.GENERATE_SPRING_SMALL;
const small_gear = GTMaterialFlags.GENERATE_SMALL_GEAR;
const fine_wire = GTMaterialFlags.GENERATE_FINE_WIRE;
const rotor = GTMaterialFlags.GENERATE_ROTOR;
const round = GTMaterialFlags.GENERATE_ROUND;
const magnetic = GTMaterialFlags.IS_MAGNETIC;

// Gem Flags
const crystallizable = GTMaterialFlags.CRYSTALLIZABLE;
const lens = GTMaterialFlags.GENERATE_LENS;

// Fluid Flags
const solder_mat = GTMaterialFlags.SOLDER_MATERIAL;
const solder_mat_bad = GTMaterialFlags.SOLDER_MATERIAL_BAD;
const solder_mat_good = GTMaterialFlags.SOLDER_MATERIAL_GOOD;

// Ore Flags
const more_sifter = GTMaterialFlags.HIGH_SIFTER_OUTPUT;

// Crafting Flags
const no_block_craft = GTMaterialFlags.EXCLUDE_BLOCK_CRAFTING_RECIPES;
const no_plate_compressor_craft = GTMaterialFlags.EXCLUDE_PLATE_COMPRESSOR_RECIPE;
const no_hand_craft = GTMaterialFlags.EXCLUDE_BLOCK_CRAFTING_BY_HAND_RECIPES;
const mortar_grind = GTMaterialFlags.MORTAR_GRINDABLE;
const no_working = GTMaterialFlags.NO_WORKING;
const no_smashing = GTMaterialFlags.NO_SMASHING;
const no_smelt = GTMaterialFlags.NO_SMELTING;
const blast_furnace_double = GTMaterialFlags.BLAST_FURNACE_CALCITE_DOUBLE;
const blast_furnace_triple = GTMaterialFlags.BLAST_FURNACE_CALCITE_TRIPLE;
const no_abs_recipe = GTMaterialFlags.DISABLE_ALLOY_BLAST;
const not_alloy = GTMaterialFlags.DISABLE_ALLOY_PROPERTY;
//#endregion

//region Tool Type Types
    const BotanicTools = [
        GTToolType.SWORD,
            GTToolType.PICKAXE,
            GTToolType.SHOVEL,
            GTToolType.AXE,
            GTToolType.HOE,
            GTToolType.MINING_HAMMER,
            GTToolType.SPADE,
            GTToolType.SAW,
            GTToolType.HARD_HAMMER,
            GTToolType.SOFT_MALLET,
            GTToolType.WRENCH,
            GTToolType.FILE,
            GTToolType.CROWBAR,
            GTToolType.SCREWDRIVER,
            GTToolType.MORTAR,
            GTToolType.WIRE_CUTTER,
            GTToolType.SCYTHE,
            GTToolType.KNIFE,
            GTToolType.BUTCHERY_KNIFE,
            GTToolType.PLUNGER,
            GTToolType.DRILL_LV,
            GTToolType.DRILL_MV,
            GTToolType.DRILL_HV,
            GTToolType.DRILL_EV,
            GTToolType.DRILL_IV,
            GTToolType.CHAINSAW_LV,
            GTToolType.BUZZSAW,
            GTToolType.SCREWDRIVER_LV,
            GTToolType.WRENCH_LV,
            GTToolType.WRENCH_HV,
            GTToolType.WRENCH_IV,
            GTToolType.WIRE_CUTTER_LV,
            GTToolType.WIRE_CUTTER_HV,
            GTToolType.WIRE_CUTTER_IV
    ]
//#endregion

//#region voltage functions
const V = (voltage) => {
    return global.v[voltage]}

const VA = (voltage) => {
    return global.va[voltage]}

const VH = (voltage) => {
    return global.vh[voltage]}

const VHA = (voltage) => {
    return global.vha[voltage]}
//#endregion

//#region Materials Table
// For docs visit https://discord.com/channels/1428076898000568492/1431300132443259053/1448515860980432957

// Name, Flags
const MaterialModifier = [
    ['titanium', [dense_plate]],
    ['neutronium', [dense_plate]],
    ['iron', [foil]],
    ['potin', [foil, ring]],
    ['brass', [foil, ring]],
    ['invar', [ring, foil]],
    ['red_alloy', [ring]],
    ['zinc', [bolt_and_screw]],
    ['nickel', [foil, ring, rod, bolt_and_screw]]
]
// Name, Elements, Color, Flags
const ComponentDust = [
    ['andesite_alloy', ['1x andesite', '1x iron'], 0xa6a08f, [centrifuge]],
    ['asteroid_stone', [], 0x70276b, []],
    ['inactive_terrasteel', [], 0x128719, []],
    ['livingrock', [], 0xc9c2b1, []],
    ['livingclay', [], 0xc9c2e7, []]
]
// Name, Elements, Color, Icon, Flags
const ComponentGem = [
    ['mana_diamond', [], 0x47eaed, DIAMOND, [crystallizable]],
    ['dragonstone', [], 0xed64d4, DIAMOND, [crystallizable]]
]
// Name, Elements, Color, Flags
const ComponentGas = [
    ['aether', [], 0x26a33f, []]  
]
// Name, Elements, Color, Flags
const ComponentLiquid = [
    ['depleted_aether', [], 0x33693e, []]
]
// Name, Elements, Color1, Color2, Icon, Blasting, Flags
const ComponentIngotLiquidTwoColors = [
    ['futura_alloy', ['4x stainless_steel', /*'sky_stone'*/], 0xebb7ea, 0x000000, SHINY, [1700, 'low', 400, 1200], [frame, plates, rod, dense_plate, mortar_grind, block]]
]
// Name, Color, IconSet, Blasting, FluidPipeProperties, ToolStats, Magnetic, Flags
const BotaniaTools = [
    ['manasteel', 0x228cc9, SHINY, [1000, 'low', 120, 400], [1855, 600, true, false, false, false], [8.0, 7.0, 768, 3, BotanicTools], false, [foils, gear, plates, rod, dense_plate, ring, frame, bolt_and_screw, mortar_grind]],
    ['terrasteel', 0x159e1e, SHINY, [1700, 'low', VA('mv'), 800], [2142, 225, true, false, false, false], [11.0, 11.0, 2048, 3.0, BotanicTools], false, [foil, gear, plates, rod, dense_plate, ring, frame, bolt_and_screw]],
    ['elementium', 0xed64d4, SHINY, [3500, 'mid', VA('iv'), 1600], [2426, 300, true, false, false, false], [16.0, 13.0, 3072, 4.0, BotanicTools], false, [foil, gear, plates, rod, dense_plate, ring, frame, bolt_and_screw]],
    ['gaiasteel', 0x8c2929, RADIOACTIVE, [7100, 'high', VA('zpm'), 2400], [3776, 400, true, true, true, true], [48.0, 16.0, 4096, 5.0, BotanicTools], true, [foil, gear, plates, rod, dense_plate, ring, frame, bolt_and_screw]]
]
// Name, Elements, Color, Icon, Blasting, Cable, Rotorstats
const SuperConductors = [
    ['blazing_etrium', [], 0x8ee8ed, [1700, 'low', VA('mv'), 1200], [V('mv'), 8, 0, true], [190, 150, 3, 14000]],
    ['niotic_calorite', [], 0xe4eb60, [1700, 'low', VA('hv'), 1500], [V('hv'), 16, 0, true], [220, 170, 3, 16000]],
    ['spirited_uranium', [], 0xcb74cc, [3500, 'low', VA('ev'), 1800], [V('ev'), 24, 0, true], [300, 190, 3, 18000]],
    ['nitromangaphosphide', [], 0x110c9c, [4400, 'mid', VA('iv'), 2100], [V('iv'), 32, 0, true], [450, 220, 3, 20000]],
    ['juperiosaturlytide', [], 0xf66999, [5300, 'mid', VA('luv'), 2400], [V('luv'), 48, 0, true], [700, 260, 3, 24000]],
    ['gaiaforged_naquadah', [], 0x421218, [7100, 'high', VA('zpm'), 2700], [V('zpm'), 64, 0, true], [1100, 380, 3, 32000]],
    ['neptunium_molybdenum_selenide', [], 0x088a5c, [10000, 'higher', VA('uv'), 3000], [V('uv'), 96, 0, true], [2000, 550, 3, 48000]],
    //['', [], 0xccffff, [10799, 'highest', VA('uhv'), 3300], [3200, 660, 3, 96000]]
]
//endregion

GTCEuStartupEvents.registry('gtceu:material', event => {
    //#region periodic materials
    const element = global.periodicTableElement;
    // Ingot
    element('neptunium', 'ingot')

    // Dust
    element('selenium', 'dust');

    // Liquid
    element('neptunium', 'fluid')

    // Material modification
    MaterialModifier.forEach(material => {
        GTMaterials.get(material[0]).addFlags(material[1]);
    })
    //#endregion

    //#region adding the materials
    ComponentDust.forEach(material => {
        event.create(material[0])
        .dust()
        .components(material[1])
        .color(material[2])
        .flags(material[3]);
    })
    ComponentGem.forEach(material => {
        event.create(material[0])
        .gem()
        .components(material[1])
        .color(material[2])
        .iconSet(material[3])
        .flags(material[4]);
    })
    ComponentGas.forEach(material => {
        event.create(material[0])
        .gas()
        .components(material[1])
        .color(material[2])
        .flags(material[3]);
    })
    ComponentLiquid.forEach(material => {
        event.create(material[0])
        .fluid()
        .components(material[1])
        .color(material[2])
        .flags(material[3]);
    })
    ComponentIngotLiquidTwoColors.forEach(material => {
        if (material[4].length != 0) {
            event.create(material[0])
            .ingot().fluid()
            .components(material[1])
            .color(material[2]).secondaryColor(material[3])
            .iconSet(material[4])
            .blastTemp(material[5][0], material[5][1], material[5][2], material[5][3])
            .flags(material[6]);
            return // early return if it can blast
        } 
        event.create(material[0])
        .ingot().fluid()
        .components(material[1])
        .color(material[2]).secondaryColor(material[3])
        .iconSet(material[4])
        .flags(material[6]);
    })
    SuperConductors.forEach(material => {
        if (material[3].length != 0) {
            event.create(material[0])
            .ingot().fluid()
            .components(materials[1])
            .color(materials[2])
            .blastTemp(material[3][0], material[3][1], material[3][2], material[3][3])
            .cableProperties(material[4][0], material[4][1], material[4][2], material[4][3])
            .rotorStats(material[5][0], material[5][1], material[5][2], material[5][3]);
            return // early return if it can blast
        }
        event.create(material[0])
        .ingot().fluid()
        .components(materials[1])
        .color(materials[2])
        .cableProperties(material[4][0], material[4][1], material[4][2], material[4][3])
        .rotorStats(material[5][0], material[5][1], material[5][2], material[5][3]);
    })
    BotaniaTools.forEach(material => {
        if (material[6]) {
            event.create(material[0])
            .ingot().fluid()
            .color(material[1])
            .iconSet(material[2])
            .blastTemp(material[3][0], material[3][1], material[3][2], material[3][3])
            .fluidPipeProperties(material[4][0], material[4][1], material[4][2], material[4][3])
            .toolStats(new ToolProperty(material[5][0], material[5][1], material[5][2], material[5][3], material[5][4]))
            .magnetic()
            .flags(material[8]);
            return // early return if magnetic
        }
        event.create(material[0])
            .ingot().fluid()
            .color(material[1])
            .iconSet(material[2])
            .blastTemp(material[3][0], material[3][1], material[3][2], material[3][3])
            .fluidPipeProperties(material[4][0], material[4][1], material[4][2], material[4][3])
            .toolStats(new ToolProperty(material[5][0], material[5][1], material[5][2], material[5][3], material[5][4]))
            .flags(material[8]);
    })
    //#endregion

    //#region ae2

    /* event.create('sky_stone')
     .element(GTElements.get('sky_stone'))*/

    compIngotLiquidSeccolor('futura_alloy', ['4x stainless_steel', /*'sky_stone'*/], 0xebb7ea, 0x000000, SHINY, [1700, 'low', 400, 1200], [frame, plates, rod, dense_plate, mortar_grind, block])
    //#endregion
});
