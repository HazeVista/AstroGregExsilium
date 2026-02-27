ServerEvents.recipes(event => {
const engrave = event.recipes.gtceu.rune_inscription

//#region controller
    event.recipes.gtceu.shaped('gtceu:runic_engraver', [
        'ECE',
        'ADA',
        'BAB'
    ], {
        A: '#gtceu:circuits/mv',
        B: 'gtceu:copper_single_cable',
        C: 'gtceu:mv_emitter',
        D: 'astrogreg:manasteel_brick_machine_casing',
        E: 'astrogreg:mv_stabilizer'
    })
    .addMaterialInfo()
//#endregion



//#region basic runes
    const basicRunes = [
        ['fire_rune', 'minecraft:blaze_powder', 'gtceu:dark_ash_dust', 'gtceu:coke_gem', 'minecraft:brick', 'gtceu:copper_dust', 50],
        ['water_rune', 'minecraft:bucket', 'minecraft:clay', 'minecraft:bone_meal', 'minecraft:ice', 'gtceu:salt_dust', 50],
        ['earth_rune', '#forge:stone', 'minecraft:coal', 'minecraft:dirt', 'minecraft:gravel', 'gtceu:iron_dust', 50],
        ['air_rune', '#forge:glass/silica', 'minecraft:string', 'gtceu:tin_rotor', '#minecraft:wool', 'gtceu:quartz_sand_dust', 50]
    ]

    basicRunes.forEach(([rune, input1, input2, input3, input4, input5, mana]) => {
        engrave(rune)
            .notConsumable('botania:lens_normal')
            .itemInputs(input1, input2, input3, input4, input5, 'astrogreg:rune_tablet')
            .inputFluids(`manafluid:mana ${mana}`)
            .itemOutputs(`2x botania:${rune}`)
            .duration(200)
            .EUt(64)
    })

    const seasonalRunes = [
        ['spring_rune', 'botania:manasteel_ingot', '#forge:seeds', '#minecraft:saplings', 'botania:fire_rune', 'botania:water_rune'],
        ['summer_rune', '#minecraft:smelts_to_glass', 'botania:manasteel_ingot', '#minecraft:logs', 'botania:earth_rune', 'botania:air_rune'],
        ['autumn_rune', 'botania:manasteel_ingot', '#forge:crops', '#minecraft:leaves', 'botania:air_rune', 'botania:fire_rune'],
        ['winter_rune', 'botania:manasteel_ingot', 'minecraft:snow_block', 'minecraft:blue_ice', 'botania:water_rune', 'botania:earth_rune']
    ]

    seasonalRunes.forEach(([rune, input1, input2, input3, input4, input5]) => {
        engrave(rune)
            .notConsumable('botania:lens_normal')
            .itemInputs(input1, input2, input3, input4, input5, 'astrogreg:rune_tablet')
            .inputFluids('manafluid:mana 75')
            .itemOutputs(`botania:${rune}`)
            .duration(200)
            .EUt(64)
    })

    const sinRunes = [
        ['gluttony_rune', 'botania:winter_rune', 'botania:fire_rune'],
        ['lust_rune', 'botania:summer_rune', 'botania:air_rune'],
        ['pride_rune', 'botania:autumn_rune', 'botania:earth_rune'],
        ['envy_rune', 'botania:winter_rune', 'botania:water_rune'],
        ['wrath_rune', 'botania:summer_rune', 'botania:fire_rune'],
        ['sloth_rune', 'botania:winter_rune', 'botania:earth_rune'],
        ['greed_rune', 'botania:spring_rune', 'botania:water_rune']
    ]

    sinRunes.forEach(([rune, input1, input2]) => {
        engrave(rune)
            .notConsumable('botania:lens_normal')
            .itemInputs(input1, input2, 'botania:mana_rune', 'botania:dragonstone', 'astrogreg:rune_tablet')
            .inputFluids('manafluid:mana 150')
            .itemOutputs(`botania:${rune}`)
            .duration(200)
            .EUt(64)
    })
//#endregion



//#region spawn eggs
    engrave('chicken_spawn_egg')
        .notConsumable('botania:terra_lens')
        .itemInputs('botania:life_rune', 'botania:air_rune', '4x #forge:seeds', 'astrogreg:rune_tablet')
        .inputFluids('manafluid:mana 1000')
        .itemOutputs('minecraft:chicken_spawn_egg')
        .duration(200)
        .EUt(64)
    
    engrave('wolf_spawn_egg')
        .notConsumable('botania:terra_lens')
        .itemInputs('minecraft:egg', 'botania:life_rune', 'minecraft:porkchop', 'minecraft:beef', 'minecraft:mutton', 'minecraft:chicken', 'astrogreg:rune_tablet')
        .inputFluids('manafluid:mana 1000')
        .itemOutputs('minecraft:wolf_spawn_egg')
        .duration(200)
        .EUt(64)
            
    engrave('cod_spawn_egg')
        .notConsumable('botania:terra_lens')
        .itemInputs('minecraft:egg', 'botania:life_rune', 'botania:water_rune', 'minecraft:water_bucket', 'astrogreg:rune_tablet')
        .inputFluids('manafluid:mana 1000')
        .itemOutputs('minecraft:cod_spawn_egg')
        .duration(200)
        .EUt(64)
            
    engrave('glow_squid_spawn_egg')
        .notConsumable('botania:terra_lens')
        .itemInputs('minecraft:squid_spawn_egg', 'botania:life_rune', 'gtceu:phosphorus_dust', 'gtceu:gold_dust', 'astrogreg:rune_tablet')
        .inputFluids('manafluid:mana 1000')
        .itemOutputs('minecraft:glow_squid_spawn_egg')
        .duration(200)
        .EUt(64)
            
    engrave('bee_spawn_egg')
        .notConsumable('botania:terra_lens')
        .itemInputs('minecraft:egg', 'botania:life_rune', 'botania:air_rune', 'botania:summer_rune', 'gtceu:gold_dust', 'astrogreg:rune_tablet')
        .inputFluids('manafluid:mana 1000')
        .itemOutputs('minecraft:bee_spawn_egg')
        .duration(200)
        .EUt(64)
            
    engrave('cat_spawn_egg')
        .notConsumable('botania:terra_lens')
        .itemInputs('minecraft:egg', 'botania:life_rune', 'minecraft:cod', 'minecraft:salmon', 'minecraft:tropical_fish', 'astrogreg:rune_tablet')
        .inputFluids('manafluid:mana 1000')
        .itemOutputs('minecraft:cat_spawn_egg')
        .duration(200)
        .EUt(64)
            
    engrave('cow_spawn_egg')
        .notConsumable('botania:terra_lens')
        .itemInputs('minecraft:egg', 'botania:life_rune', 'botania:water_rune', '2x minecraft:wheat', 'minecraft:bucket', 'astrogreg:rune_tablet')
        .inputFluids('manafluid:mana 1000')
        .itemOutputs('minecraft:cow_spawn_egg')
        .duration(200)
        .EUt(64)
            
    engrave('squid_spawn_egg')
        .notConsumable('botania:terra_lens')
        .itemInputs('minecraft:egg', 'botania:life_rune', 'botania:water_rune', 'minecraft:black_dye', '#minecraft:fishes', 'astrogreg:rune_tablet')
        .inputFluids('manafluid:mana 1000')
        .itemOutputs('minecraft:squid_spawn_egg')
        .duration(200)
        .EUt(64)
            
    engrave('pig_spawn_egg')
        .notConsumable('botania:terra_lens')
        .itemInputs('minecraft:egg', 'botania:life_rune', 'botania:gluttony_rune','minecraft:carrot', 'minecraft:potato', 'astrogreg:rune_tablet')
        .inputFluids('manafluid:mana 1000')
        .itemOutputs('minecraft:pig_spawn_egg')
        .duration(200)
        .EUt(64)
            
    engrave('parrot_spawn_egg')
        .notConsumable('botania:terra_lens')
        .itemInputs('minecraft:egg', 'botania:life_rune', 'botania:air_rune', 'botania:summer_rune', 'minecraft:green_dye', 'minecraft:red_dye', 'astrogreg:rune_tablet')
        .inputFluids('manafluid:mana 1000')
        .itemOutputs('minecraft:parrot_spawn_egg')
        .duration(200)
        .EUt(64)
            
    engrave('axolotl_spawn_egg')
        .notConsumable('botania:terra_lens')
        .itemInputs('minecraft:egg','botania:life_rune', 'botania:water_rune', 'botania:earth_rune', '2x minecraft:pink_dye', 'astrogreg:rune_tablet')
        .inputFluids('manafluid:mana 1000')
        .itemOutputs('minecraft:axolotl_spawn_egg')
        .duration(200)
        .EUt(64)
            
    engrave('sheep_spawn_egg')
        .notConsumable('botania:terra_lens')
        .itemInputs('minecraft:egg', 'botania:life_rune', '2x minecraft:wheat', 'minecraft:shears', 'astrogreg:rune_tablet')
        .inputFluids('manafluid:mana 1000')
        .itemOutputs('minecraft:sheep_spawn_egg')
        .duration(200)
        .EUt(64)
            
    engrave('glacian_spawn_egg')
        .notConsumable('botania:terra_lens')
        .itemInputs('minecraft:sheep_spawn_egg', 'botania:life_rune', 'botania:space_rune', 'minecraft:snow', 'minecraft:ice', 'astrogreg:rune_tablet')
        .inputFluids('manafluid:mana 1000')
        .itemOutputs('ad_astra:glacian_ram_spawn_egg')
        .duration(200)
        .EUt(64)
//#endregion



//#region advanced runes
    const advancedRunes = [
        ['mana_rune', 'botania:mana_pearl', 'botania:manaweave_cloth', 'botania:manasteel_ingot', 'botania:mana_diamond'],
        ['space_rune', 'ae2:fluix_crystal', 'astrogreg:asteroid_stone', 'minecraft:end_stone', 'botania:mana_diamond'],
        ['life_rune', 'botania:fire_rune', 'botania:air_rune', 'botania:earth_rune', 'botania:water_rune', 'botania:terrasteel_ingot'],
        // ['energy_rune', 'botania:fire_rune', '3x gtceu:red_alloy_dust', 'botania:manasteel_ingot'] needs 4th input
    ]

    advancedRunes.forEach(([rune, input1, input2, input3, input4, input5]) => {
        if (input5) {
            engrave(rune)
                .notConsumable('botania:terra_lens')
                .itemInputs(input1, input2, input3, input4, input5, 'astrogreg:rune_tablet')
                .inputFluids('manafluid:mana 200')
                .itemOutputs(`botania:${rune}`)
                .duration(200)
                .EUt(256)
        } else {
            engrave(rune)
                .notConsumable('botania:terra_lens')
                .itemInputs(input1, input2, input3, input4, 'astrogreg:rune_tablet')
                .inputFluids('manafluid:mana 200')
                .itemOutputs(`botania:${rune}`)
                .duration(200)
                .EUt(256)
        }
    })
//#endregion



//#region planetary runes
    // engrave('_rune')
    //     .itemInputs('', '', '', '', 'botania:tiny_planet', 'astrogreg:rune_tablet')
    //     .notConsumable('botania:pixie_lens')
    //     .inputFluids('manafluid:mana 500')
    //     .itemOutputs('botania:_rune')
    //     .duration(600)
    //     .EUt(1024)
//#endregion
})