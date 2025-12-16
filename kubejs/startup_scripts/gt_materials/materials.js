//#region properties
const IngotProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.IngotProperty');
const DustProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.DustProperty');
const FluidProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.FluidProperty');
const BlastProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.BlastProperty');
const FluidPipeProperties = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.FluidPipeProperties');
const ToolProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.ToolProperty');
//#endregion

//#region icon sets
const DULL = GTMaterialIconSet.DULL
const METALLIC = GTMaterialIconSet.METALLIC
const MAGNETIC = GTMaterialIconSet.MAGNETIC
const SHINY = GTMaterialIconSet.SHINY
const BRIGHT = GTMaterialIconSet.BRIGHT
const DIAMOND = GTMaterialIconSet.DIAMOND
const EMERALD = GTMaterialIconSet.EMERALD
const GEM_HORIZONTAL = GTMaterialIconSet.GEM_HORIZONTAL
const GEM_VERTICAL = GTMaterialIconSet.GEM_VERTICAL
const RUBY = GTMaterialIconSet.RUBY
const OPAL = GTMaterialIconSet.OPAL
const GLASS = GTMaterialIconSet.GLASS
const NETHERSTAR = GTMaterialIconSet.NETHERSTAR
const FINE = GTMaterialIconSet.FINE
const SAND = GTMaterialIconSet.SAND
const WOOD = GTMaterialIconSet.WOOD
const ROUGH = GTMaterialIconSet.ROUGH
const FLINT = GTMaterialIconSet.FLINT
const LIGNITE = GTMaterialIconSet.LIGNITE
const QUARTZ = GTMaterialIconSet.QUARTZ
const CERTUS = GTMaterialIconSet.CERTUS
const LAPIS = GTMaterialIconSet.LAPIS
const FLUID = GTMaterialIconSet.FLUID
const RADIOACTIVE = GTMaterialIconSet.RADIOACTIVE
//#endregion

//#region material flags
//any material
const no_unify = GTMaterialFlags.NO_UNIFICATION
const no_recipes = GTMaterialFlags.DISABLE_MATERIAL_RECIPES
const electrolyze = GTMaterialFlags.DECOMPOSITION_BY_ELECTROLYZING
const centrifuge = GTMaterialFlags.DECOMPOSITION_BY_CENTRIFUGING
const no_decomp = GTMaterialFlags.DISABLE_DECOMPOSITION
const explosive = GTMaterialFlags.EXPLOSIVE
const flammable = GTMaterialFlags.FLAMMABLE
const sticky = GTMaterialFlags.STICKY
const glow = GTMaterialFlags.PHOSPHORESCENT

//requires other flags
const plates = GTMaterialFlags.GENERATE_PLATE //requires dust
const dense = GTMaterialFlags.GENERATE_DENSE //requires plate
const rod = GTMaterialFlags.GENERATE_ROD // requires dust
const bolt_screw = GTMaterialFlags.GENERATE_BOLT_SCREW //requires rod
const frame = GTMaterialFlags.GENERATE_FRAME //requires rod
const gear = GTMaterialFlags.GENERATE_GEAR //requires rod & plate
const long_rod = GTMaterialFlags.GENERATE_LONG_ROD //requires rod
const block = GTMaterialFlags.FORCE_GENERATE_BLOCK //requires dust
const no_block_craft = GTMaterialFlags.EXCLUDE_BLOCK_CRAFTING_RECIPES //requires dust
const no_compressor_plate = GTMaterialFlags.EXCLUDE_PLATE_COMPRESSOR_RECIPE //requires plate
const no_hand_craft = GTMaterialFlags.EXCLUDE_BLOCK_CRAFTING_BY_HAND_RECIPES //requires dust
const mortar_grind = GTMaterialFlags.MORTAR_GRINDABLE //requires dust
const no_working = GTMaterialFlags.NO_WORKING //requires dust
const no_smashing = GTMaterialFlags.NO_SMASHING //requires dust
const no_smelt = GTMaterialFlags.NO_SMELTING //requires dust
const blast_double = GTMaterialFlags.BLAST_FURNACE_CALCITE_DOUBLE //requires dust
const blast_triple = GTMaterialFlags.BLAST_FURNACE_CALCITE_TRIPLE //requires dust
const no_abs = GTMaterialFlags.DISABLE_ALLOY_BLAST // requires fluid & blast properties
const no_alloy = GTMaterialFlags.DISABLE_ALLOY_PROPERTY //requires no_abs & fluid
const solder_mat = GTMaterialFlags.SOLDER_MATERIAL //requires fluid
const solder_mat_bad = GTMaterialFlags.SOLDER_MATERIAL_BAD //requires fluid
const solder_mat_good = GTMaterialFlags.SOLDER_MATERIAL_GOOD //requires fluid
const foil = GTMaterialFlags.GENERATE_FOIL //requires ingot
const ring = GTMaterialFlags.GENERATE_RING //requires rod & ingot
const spring = GTMaterialFlags.GENERATE_SPRING //requires long_rod & ingot
const small_spring = GTMaterialFlags.GENERATE_SPRING_SMALL //requires rod & ingot
const small_gear = GTMaterialFlags.GENERATE_SMALL_GEAR //requires plate & rod
const fine_wire = GTMaterialFlags.GENERATE_FINE_WIRE //requires foil & ingot
const rotor = GTMaterialFlags.GENERATE_ROTOR //requires bolt_screw
const round = GTMaterialFlags.GENERATE_ROUND //requires ingot
const magnetic = GTMaterialFlags.IS_MAGNETIC //requires ingot
const crystallizable = GTMaterialFlags.CRYSTALLIZABLE //requires gem
const lens = GTMaterialFlags.GENERATE_LENS //requires gem
const more_sifter = GTMaterialFlags.HIGH_SIFTER_OUTPUT //requires ore
const no_ore_smelting = GTMaterialFlags.NO_ORE_SMELTING //requires ore
const no_tab = GTMaterialFlags.NO_ORE_PROCESSING_TAB //requires ore
//#endregion

//#region voltage functions
global["V"] = {};
global["VA"] = {};
global["VH"] = {};
global["VHA"] = {};
const VoltageNames = GTValues.VN;
VoltageNames.forEach((Tier, index) => {
    global["V"][Tier.toUpperCase()] = GTValues.V[index];
    global["VA"][Tier.toUpperCase()] = GTValues.VA[index];
    global["VH"][Tier.toUpperCase()] = GTValues.VH[index];
    global["VHA"][Tier.toUpperCase()] = GTValues.VHA[index];
});

const v = global.V
const va = global.VA
const vh = global.VH
const vha = global.VHA
//#endregion

//#region material table
// For docs visit https://discord.com/channels/1428076898000568492/1431300132443259053/1448515860980432957

// Name, Flags
const MaterialModifier = [
    ['titanium', [dense]],
    ['neutronium', [dense]],
    ['iron', [foil]],
    ['potin', [foil, ring]],
    ['brass', [foil, ring]],
    ['invar', [ring, foil]],
    ['red_alloy', [ring]],
    ['zinc', [bolt_screw]],
    ['nickel', [foil, ring, rod, bolt_screw]]
]

// Name, Elements, Color, Flags
const ComponentDust = []

// Name, Elements, Color, Icon, Flag
const ComponentGem = [

]

// Name, Elements, Color, Flags
const ComponentGas = [

]

// Name, Elements, Color, Flags
const ComponentLiquid = [

]

// Name, Elements, Color1, Color2, Icon, Blasting, Flags    (using darker colors for color2 almost always looks better)
const ComponentIngotLiquidTwoColors = [

]

// Name, Elements, Color, Icon, Blasting, Cable, Rotorstats
const SuperConductors = [
    ['blazing_etrium', [], 0x8ee8ed, [1700, 'low', va.MV, 1200], [v.MV, 8, 0, true], [190, 150, 3, 14000]],
    ['niotic_calorite', [], 0xe4eb60, [1700, 'low', va.HV, 1500], [v.HV, 16, 0, true], [220, 170, 3, 16000]],
    ['spirited_uranium', [], 0xcb74cc, [3500, 'low', va.EV, 1800], [v.EV, 24, 0, true], [300, 190, 3, 18000]],
    ['nitro_flux', [], 0x110c9c, [4400, 'mid', va.IV, 2100], [v.IV, 32, 0, true], [450, 220, 3, 20000]],
    ['juperiosaturlytide', [], 0xf66999, [5300, 'mid', va.LUV, 2400], [v.LUV, 48, 0, true], [700, 260, 3, 24000]],
    ['gaiaforged_naquadah', [], 0x421218, [7100, 'high', va.ZPM, 2700], [v.ZPM, 64, 0, true], [1100, 380, 3, 32000]],
    ['neptunium_molybdenum_selenide', [], 0x088a5c, [10000, 'higher', va.UV, 3000], [v.UV, 96, 0, true], [2000, 550, 3, 48000]],
]

const PeriodicTableElements = [
    ['neptunium', ['ingot', 'fluid']],
]