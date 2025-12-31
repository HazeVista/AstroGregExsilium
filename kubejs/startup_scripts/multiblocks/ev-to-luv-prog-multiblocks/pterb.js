let PTERBMachine = Java.loadClass("net.neganote.gtutilities.common.machine.multiblock.PTERBMachine")
let GTMemoizer = Java.loadClass("com.gregtechceu.gtceu.utils.memoization.GTMemoizer")

StartupEvents.postInit(event => {

    let UtilMachines = Java.loadClass("net.neganote.gtutilities.common.machine.UtilMachines")

    let pterb_pattern = (definition) => FactoryBlockPattern.start()
        .aisle("###CCC###", "####F####", "#########", "####N####", "####N####", "####N####", "####N####", "####N####")
        .aisle("#CCCNCCC#", "###FNF###", "####N####", "####N####", "####N####", "####F####", "#########", "#########")
        .aisle("#CCHHHCC#", "#########", "#########", "#########", "####F####", "####F####", "#########", "#########")
        .aisle("CCHHHHHCC", "#F#####F#", "#########", "####S####", "###SSS###", "###SSS###", "###S#S###", "#########")
        .aisle("CNHHHHHNC", "FN##H##NF", "#N##@##N#", "NN#SSS#NN", "NNFSSSFNN", "NFFSSSFFN", "N#######N", "N#######N")
        .aisle("CCHHHHHCC", "#F#####F#", "#########", "####S####", "###SSS###", "###SSS###", "###S#S###", "#########")
        .aisle("#CCHHHCC#", "#########", "#########", "#########", "####F####", "####F####", "#########", "#########")
        .aisle("#CCCNCCC#", "###FNF###", "####N####", "####N####", "####N####", "####F####", "#########", "#########")
        .aisle("###CCC###", "####F####", "#########", "####N####", "####N####", "####N####", "####N####", "####N####")
        .where("@", Predicates.controller(Predicates.blocks(UtilMachines.PTERB_MACHINE.getBlock())))
        .where("C", Predicates.blocks("gtceu:palladium_substation").setMinGlobalLimited(30)
            .or(PTERBMachine.getHatchPredicates()))
        .where("N", Predicates.blocks("gtceu:nonconducting_casing"))
        .where("S", Predicates.blocks("gtceu:superconducting_coil"))
        .where("H", Predicates.blocks("gtceu:high_power_casing"))
        .where("F", Predicates.frames(GTMaterials.Europium))
        .where("#", Predicates.any())
        .build()

    UtilMachines.PTERB_MACHINE.setPatternFactory(
        GTMemoizer["memoize(java.util.function.Supplier)"](
            ()=> pterb_pattern
                .apply(UtilMachines.PTERB_MACHINE)
        )
    )

})