ServerEvents.recipes(event => {

    const gt = event.recipes.gtceu

    const vanillaflowers = [
        ['dandelion', 'yellow', 1], ['poppy', 'red', 1], ['blue_orchid', 'light_blue', 1], ['allium', 'magenta', 1],
        ['azure_bluet', 'light_gray', 1], ['red_tulip', 'red', 1], ['orange_tulip', 'orange', 1], ['white_tulip', 'light_gray', 1], 
        ['pink_tulip', 'pink', 1], ['oxeye_daisy', 'white', 1], ['cornflower', 'blue', 1], ['lily_of_the_valley', 'white', 1], 
        ['wither_rose', 'black', 1], ['rose_bush', 'red', 2], ['lilac', 'magenta', 2], ['sunflower', 'yellow', 2],
        ['peony', 'pink', 2], ['pink_petals', 'pink', 1], ['beetroot', 'red', 1], ['ink_sac', 'black', 1]
    ]

    const gtceuDyes = [
        ['metal_mixture', 'brown'], ['cocoa', 'brown'], ['lazurite', 'blue'], ['sodalite', 'blue'], ['lapis', 'blue']
    ]

    const dyeColors = [
        'white', 'red', 'orange', 'yellow', 'green', 'blue', 'purple', 'light_gray', 'gray', 'black', 'brown', 'light_blue',
        'lime', 'cyan', 'magenta', 'pink'
    ]

    vanillaflowers.forEach(([flower, color, amount]) => {

        gt.shaped(`${amount}x minecraft:${color}_dye`, [
            'A',
            'B'
        ], {
            A: `minecraft:${flower}`,
            B: '#forge:tools/mortars'
        })

    })

    dyeColors.forEach((color) => {

        gt.shaped(`minecraft:${color}_dye`, [
            'A',
            'B'
        ], {
            A: `#botania:petals/${color}`,
            B: '#forge:tools/mortars'
        })

        gt.compressor(`compress_${color}_petals_to_block`)
            .itemInputs(`9x botania:${color}_petal`)
            .itemOutputs(`botania:${color}_petal_block`)
            .duration(300)
            .EUt(2)

        gt.extractor(`extract_${color}_dye_from_${color}_petal`)
            .itemInputs(`#botania:petals/${color}`)
            .itemOutputs(`9x minecraft:${color}_dye`)
            .duration(400)
            .EUt(2)
        
        gt.packer(`unpack_${color}_petals_from_${color}_block`)
            .itemInputs(`botania:${color}_petal_block`)
            .itemOutputs(`9x botania:${color}_petal`)
            .circuit(9)
            .duration(300)
            .EUt(2)

        gt.macerator(`macerate_${color}_petal_block`)
            .itemInputs(`botania:${color}_petal_block`)
            .itemOutputs(`minecraft:${color}_dye`)
            .duration(200)
            .EUt(2)

    })

    gtceuDyes.forEach(([dust, color]) => {
    
        gt.extractor(`${color}_dye_from_${dust}`)
            .itemInputs(`gtceu:${dust}_dust`)
            .itemOutputs(`minecraft:${color}_dye`)
            .duration(400)
            .EUt(2)

        gt.shaped(`minecraft:${color}_dye`, [
            'A',
            'B'
        ], {
            A: `gtceu:${dust}_dust`,
            B: '#forge:tools/mortars'
        })

    })

    gt.shaped('gtceu:lapis_dust', [
        'A',
        'B'
    ], {
        A: 'minecraft:lapis_lazuli',
        B: '#forge:tools/mortars'
    })

})