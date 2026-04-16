execute as @a[tag=!StartingItems] run item replace entity @s armor.head with ad_astra:space_helmet
execute as @a[tag=!StartingItems] run item replace entity @s armor.chest with ad_astra:space_suit{BotariumData:{StoredFluids:[{Fluid:"gtceu:oxygen",Amount:2500L}]}}
execute as @a[tag=!StartingItems] run item replace entity @s armor.legs with ad_astra:space_pants
execute as @a[tag=!StartingItems] run item replace entity @s armor.feet with ad_astra:space_boots
execute as @a[tag=!StartingItems] run tag @s add StartingItems