/*
	*
	*	Guide to creating AstroGreg:Exsilium machines in KubeJS:
	*
	*	Registering the actual singleblocks:
	*	GTCEuStartupEvents.registry('gtceu:machine', event => {
	*	event.create('example_machine_name', 'simple')     	names the machine, always use 'simple' for the category to keep things simple
	*		.tiers(GTValues.LV, GTValues.MV, etc.)			this registers the machine for each tier, most of the time just go to UV
	*		.definition((tier, builder) => {				this line just opens the builder to make the models and types for each tier
	*			return builder								ignore this line fr, just know it has to be here
	*			.recipeType('example_type')					you can even add multiple .recipeType() lines to add more types
	*			.workableTieredHullModel('filepath_here')	this points to a folder in assets for either:
	*		})												a) GTCEu machines, in which case it would look like 
	*	})														'gtceu:block/machines/machine_name' for singleblock overlays
	*																or
	*															'gtceu:block/multiblocks/machine_name' for multiblocks
	*														b) AstroGreg machines, for our custom overlays, which looks like
	*															'astrogreg:block/machines/machine_name'
	*																or
	*															'astrogreg:block/multiblocks/machine_name'
	*
	*	Now, to register our custom recipe type in KubeJS:										
	*	GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
	*	event.create('example_type')						this names your type
	*		.category('simple')								once again, use simple always
	*		.setEUIO('in')									tells the machine which direction to push/pull EU. 'out' is for generators.
	*		.setMaxIOSize(1, 1, 1, 1)						number of in/out slots. order is item in, item out, fluid in, fluid out.
	*		.setSlotOverlay('false, false, true, GuiTextures.EXAMPLE_OVERLAY')	this line is optional, sets slot overlays
	*		.setSlotOverlay('false, false, AstroGUITextures.EXAMPLE_OVERLAY')	you can set multiple. see section below for details
	*		.setProgressBar(GuiTextures.PROGRESS_BAR_EXAMPLE, FillDirection.LEFT_TO_RIGHT)	sets progress bar, skipping defaults to white arrow.
	*		.setSound('GTSoundEntries.EXAMPLE')				not sure if this is required or what the default would be, sets the sound
	*
	*
	*	
	*	Slot Overlay Guide:
	*	Slot overlays contain either 3 or 4 values. The first 2 or 3 are booleans, and the last is the target texture.
	*	The first boolean is for whether the overlay is for the outputs or not. If this is true then it will apply to
	*	output on the machine.
	*	The second boolean is for whether the overlay is for fluids or not. a true value will set the overlay on the 
	*	fluid slot
	*	The third boolean is optional and will default to false if its not present, so you can skip it if its not true.
	*	If it is true, it will only apply your slot overlay to the last slot of whichever category you chose for the
	*	other two values. A null value (or false) will have your overlay applied to all slots of the chosen values.
	*	Finally, to pick the texture you actually want to apply, you can either:
	*	a) use base GT textures found in the java class GuiTextures found here:
	*	https://github.com/GregTechCEu/GregTech-Modern/blob/14ce4489678793e0315f3585c21b8e7e71b12ee7/src/main/java/com/gregtechceu/gtceu/api/gui/GuiTextures.java#L7
	*	or
	*	b) use custom AstroGreg textures in the java class AstroGUITextures found here:
	*	https://github.com/HazeVista/AstroCore/blob/main/src/main/java/com/astro/core/client/AstroClient/AstroGUITextures.java
	*	
	*	
	*	Progress Bar Guide:
	*	This line contains two values. The first picks your actual progress bar, and the second chooses the direction it fills
	*	The actual progress bar can come from base GT or from our custom AstroGreg textures, found in the same directory as
	*	slot overlays are.
	*	Base GTCEu is found here under GuiTextures:
	*	https://github.com/GregTechCEu/GregTech-Modern/blob/14ce4489678793e0315f3585c21b8e7e71b12ee7/src/main/java/com/gregtechceu/gtceu/api/gui/GuiTextures.java#L7
	*	and custom AstroGreg progress bars are found here:
	*	https://github.com/HazeVista/AstroCore/blob/main/src/main/java/com/astro/core/client/AstroClient/AstroGUITextures.java
	*	The second value, FillDirection, has five possible options currently through Base GTCEu, and theyre pretty intuitive.
	*	LEFT_TO_RIGHT, UP_TO_DOWN, DOWN_TO_UP, RIGHT_TO_LEFT (if you're insane), and ALWAYS_FULL
	*
	*
	*	Sounds Guide:
	*	The sound your machine makes is done with a single value, picked from either GTCEu's GTSoundEntries class or AstroGreg's
	*	AstroSoundEntries class.
	*	GTCEU's sound entries can be found here:
	*	https://github.com/GregTechCEu/GregTech-Modern/blob/14ce4489678793e0315f3585c21b8e7e71b12ee7/src/main/java/com/gregtechceu/gtceu/common/data/GTSoundEntries.java#L14
	*	and AstroGreg's sound entries can be found here:
	*	https://github.com/HazeVista/AstroCore/blob/main/src/main/java/com/astro/core/client/AstroClient/AstroSoundEntries.java
	*
	*/