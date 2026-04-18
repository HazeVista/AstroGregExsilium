# optimized script by @noxon on discord
# Mark as rewarded
tag @s add StartingItems

# Temporary mark current player 
tag @s add current_player

# Assign a new id to the current player
scoreboard players add id id 1
scoreboard players operation @s id = id id

# Space Helmet
summon item ~ ~ ~ {Tags:["current_item"],Item:{id:"ad_astra:space_helmet",Count:1b,tag:{Soulbound:1b,display:{Lore:['[{"text":"Soulbound","italic":false}]']}}},PickupDelay:0s}
# Space Suit
summon item ~ ~ ~ {Tags:["current_item"],Item:{id:"ad_astra:space_suit",Count:1b,tag:{Soulbound:1b,display:{Lore:['[{"text":"Soulbound","italic":false}]']},BotariumData:{StoredFluids:[{Fluid:"gtceu:oxygen",Amount:2500L}]}}},PickupDelay:0s}
# Space Pant
summon item ~ ~ ~ {Tags:["current_item"],Item:{id:"ad_astra:space_pants",Count:1b,tag:{Soulbound:1b,display:{Lore:['[{"text":"Soulbound","italic":false}]']}}},PickupDelay:0s}
# Space Boots
summon item ~ ~ ~ {Tags:["current_item"],Item:{id:"ad_astra:space_boots",Count:1b,tag:{Soulbound:1b,display:{Lore:['[{"text":"Soulbound","italic":false}]']}}},PickupDelay:0s}

# Assign the same id to items tag.owner
execute as @e[type=item,tag=current_item] store result entity @s Item.tag.owner int 1 run scoreboard players get id id
# Set items owner data from the UUID of the current player
execute as @e[type=item,tag=current_item] run data modify entity @s Owner set from entity @p[tag=current_player] UUID
# Set items tag.OUUID data from their own Owner data (that has already been updated previously)
execute as @e[type=item,tag=current_item] run data modify entity @s tag.OUUID set from entity @s Owner

# Unmark current items
tag @e[type=item,tag=current_item,distance=..1] remove current_item

# Unmark current player
tag @s remove current_player