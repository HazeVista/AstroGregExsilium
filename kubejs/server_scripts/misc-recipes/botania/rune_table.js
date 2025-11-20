ServerEvents.recipes(event => {
//#region runes
event.recipes.botania.runic_altar('botania:rune_fire', ['minecraft:blaze_powder', 'gtceu:dark_ash', 'gtceu:coke_gem', 'minecraft:brick', 'gtceu:copper_dust'], 5000)
event.recipes.botania.runic_altar('botania:rune_water', ['minecraft:bucket', 'minecraft:clay', 'minecraft:bone_meal', '', 'gtceu:salt_dust'], 5000)
event.recipes.botania.runic_altar('botania:rune_air', ['#forge:glass_silica', 'minecraft:string', 'gtceu:tin_rotor', '#minecraft:wool', 'gtceu:quartz_sand_dust'], 5000)
event.recipes.botania.runic_altar('botania:rune_earth', ['#forge:stone', 'minecraft:coal_block', 'minecraft:dirt', 'minecraft:gravel', 'gtceu:iron_dust'], 5000)
// event.recipes.botania.runic_altar('botania:rune_summer', ['', '', '', '', ''], 7500)
// event.recipes.botania.runic_altar('botania:rune_winter', ['', '', '', '', ''], 7500)
// event.recipes.botania.runic_altar('botania:rune_autumn', ['', '', '', '', ''], 7500)
// event.recipes.botania.runic_altar('botania:rune_spring', ['', '', '', '', ''], 7500)
// event.recipes.botania.runic_altar('botania:rune_mana', ['', '', '', '', ''], 7500)
// event.recipes.botania.runic_altar('botania:rune_life', ['', '', '', '', ''], 10000)
// event.recipes.botania.runic_altar('botania:rune_energy', ['', '', '', '', ''], 10000)
// event.recipes.botania.runic_altar('botania:rune_gluttony', ['', '', '', '', ''], 15000)
// event.recipes.botania.runic_altar('botania:rune_lust', ['', '', '', '', ''], 15000)
// event.recipes.botania.runic_altar('botania:rune_pride', ['', '', '', '', ''], 15000)
// event.recipes.botania.runic_altar('botania:rune_envy', ['', '', '', '', ''], 15000)
// event.recipes.botania.runic_altar('botania:rune_wrath', ['', '', '', '', ''], 15000)
// event.recipes.botania.runic_altar('botania:rune_sloth', ['', '', '', '', ''], 15000)
// event.recipes.botania.runic_altar('botania:rune_greed', ['', '', '', '', ''], 15000)
// event.recipes.botania.runic_altar('botania:rune_', ['', '', '', '', ''], 50000)
//#endregion



//#region spawn eggs
event.recipes.botania.runic_altar('minecraft:chicken_spawn_egg', ['botania:rune_life', 'botania:rune_air', '#forge:seeds', '#forge:seeds', '#forge:seeds', '#forge:seeds'], 1000).keepIngredient('botania:rune_life')
event.recipes.botania.runic_altar('minecraft:wolf_spawn_egg', ['minecraft:egg', 'botania:rune_life', 'minecraft:porkchop', 'minecraft:beef', 'minecraft:mutton', 'minecraft:chicken'], 1000).keepIngredient('botania:rune_life')
event.recipes.botania.runic_altar('minecraft:cod_spawn_egg', ['minecraft:egg', 'botania:rune_life', 'botania:rune_water', 'minecraft:water_bucket'], 1000).keepIngredient('botania:rune_life')
event.recipes.botania.runic_altar('minecraft:glow_squid_spawn_egg', ['minecraft:squid_spawn_egg', 'botania:rune_life', 'gtceu:phosphorus_dust', 'gtceu:gold_dust'], 1000).keepIngredient('botania:rune_life')
event.recipes.botania.runic_altar('minecraft:bee_spawn_egg', ['minecraft:egg', 'botania:rune_life', 'botania:rune_air', 'botania:rune_summer', 'gtceu:gold_dust'], 1000).keepIngredient('botania:rune_life')
event.recipes.botania.runic_altar('minecraft:cat_spawn_egg', ['minecraft:egg', 'botania:rune_life', 'minecraft:cod', 'minecraft:salmon', 'minecraft:tropical_fish'], 1000).keepIngredient('botania:rune_life')
event.recipes.botania.runic_altar('minecraft:cow_spawn_egg', ['minecraft:egg', 'botania:rune_life', 'botania:rune_water', 'minecraft:wheat', 'minecraft:wheat', 'minecraft:bucket'], 1000).keepIngredient('botania:rune_life')
event.recipes.botania.runic_altar('minecraft:squid_spawn_egg', ['minecraft:egg', 'botania:rune_life', 'botania:rune_water', 'minecraft:black_dye', '#minecraft:fishes'], 1000).keepIngredient('botania:rune_life')
event.recipes.botania.runic_altar('minecraft:pig_spawn_egg', ['minecraft:egg', 'botania:rune_life', 'botania:rune_gluttony','minecraft:carrot', 'minecraft:potato'], 1000).keepIngredient('botania:rune_life')
event.recipes.botania.runic_altar('minecraft:parrot_spawn_egg', ['minecraft:egg', 'botania:rune_life', 'botania:rune_air', 'botania:rune_summer', 'minecraft:green_dye', 'minecraft:red_dye'], 1000).keepIngredient('botania:rune_life')
event.recipes.botania.runic_altar('minecraft:axolotl_spawn_egg', ['minecraft:egg','botania:rune_life', 'botania:rune_water', 'botania:rune_earth','minecraft:pink_dye', 'minecraft:pink_dye'], 1000).keepIngredient('botania:rune_life')
event.recipes.botania.runic_altar('minecraft:sheep_spawn_egg', ['minecraft:egg', 'botania:rune_life', 'minecraft:wheat', 'minecraft:wheat', 'minecraft:shears'], 1000).keepIngredient('botania:rune_life')
event.recipes.botania.runic_altar('ad_astra:glacian_ram_spawn_egg', ['minecraft:sheep_spawn_egg', 'botania:rune_life', 'botania:rune_space', 'minecraft:snow', 'minecraft:ice'], 1000).keepIngredient('botania:rune_life').keepIngredient('botania:rune_space')
//#endregion
})