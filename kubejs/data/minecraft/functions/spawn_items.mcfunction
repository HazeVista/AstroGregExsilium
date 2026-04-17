execute store result score @s id run scoreboard players get id id
scoreboard players add id id 1
summon item ~ ~ ~ {Item:{id:"ad_astra:space_helmet",Count:1b,tag:{Soulbound:1b,Owner:0,OUUID:[I;0,0,0,0]}},PickupDelay:1,Owner:[I;0,0,0,0]}

execute store result entity @e[sort=nearest,type=item,limit=1,nbt={Item:{id:"ad_astra:space_helmet"}}] Item.tag.owner int 1 as @s run scoreboard players get @s id
execute store result entity @e[sort=nearest,type=item,limit=1,nbt={Item:{id:"ad_astra:space_helmet"}}] Owner[0] int 1 as @s run data get entity @s UUID[0]
execute store result entity @e[sort=nearest,type=item,limit=1,nbt={Item:{id:"ad_astra:space_helmet"}}] Owner[1] int 1 as @s run data get entity @s UUID[1]
execute store result entity @e[sort=nearest,type=item,limit=1,nbt={Item:{id:"ad_astra:space_helmet"}}] Owner[2] int 1 as @s run data get entity @s UUID[2]
execute store result entity @e[sort=nearest,type=item,limit=1,nbt={Item:{id:"ad_astra:space_helmet"}}] Owner[3] int 1 as @s run data get entity @s UUID[3]
execute store result entity @e[sort=nearest,type=item,limit=1,nbt={Item:{id:"ad_astra:space_helmet"}}] Item.tag.OUUID[0] int 1 as @s run data get entity @s UUID[0]
execute store result entity @e[sort=nearest,type=item,limit=1,nbt={Item:{id:"ad_astra:space_helmet"}}] Item.tag.OUUID[1] int 1 as @s run data get entity @s UUID[1]
execute store result entity @e[sort=nearest,type=item,limit=1,nbt={Item:{id:"ad_astra:space_helmet"}}] Item.tag.OUUID[2] int 1 as @s run data get entity @s UUID[2]
execute store result entity @e[sort=nearest,type=item,limit=1,nbt={Item:{id:"ad_astra:space_helmet"}}] Item.tag.OUUID[3] int 1 as @s run data get entity @s UUID[3]

summon item ~ ~ ~ {Item:{id:"ad_astra:space_suit",Count:1b,tag:{Soulbound:1b,Owner:0,OUUID:[I;0,0,0,0],BotariumData:{StoredFluids:[{Fluid:"gtceu:oxygen",Amount:2500L}]}}},PickupDelay:1,Owner:[I;0,0,0,0]}
execute store result entity @e[sort=nearest,type=item,limit=1,nbt={Item:{id:"ad_astra:space_suit"}}] Item.tag.owner int 1 as @s run scoreboard players get @s id
execute store result entity @e[sort=nearest,type=item,limit=1,nbt={Item:{id:"ad_astra:space_suit"}}] Owner[0] int 1 as @s run data get entity @s UUID[0]
execute store result entity @e[sort=nearest,type=item,limit=1,nbt={Item:{id:"ad_astra:space_suit"}}] Owner[1] int 1 as @s run data get entity @s UUID[1]
execute store result entity @e[sort=nearest,type=item,limit=1,nbt={Item:{id:"ad_astra:space_suit"}}] Owner[2] int 1 as @s run data get entity @s UUID[2]
execute store result entity @e[sort=nearest,type=item,limit=1,nbt={Item:{id:"ad_astra:space_suit"}}] Owner[3] int 1 as @s run data get entity @s UUID[3]
execute store result entity @e[sort=nearest,type=item,limit=1,nbt={Item:{id:"ad_astra:space_suit"}}] Item.tag.OUUID[0] int 1 as @s run data get entity @s UUID[0]
execute store result entity @e[sort=nearest,type=item,limit=1,nbt={Item:{id:"ad_astra:space_suit"}}] Item.tag.OUUID[1] int 1 as @s run data get entity @s UUID[1]
execute store result entity @e[sort=nearest,type=item,limit=1,nbt={Item:{id:"ad_astra:space_suit"}}] Item.tag.OUUID[2] int 1 as @s run data get entity @s UUID[2]
execute store result entity @e[sort=nearest,type=item,limit=1,nbt={Item:{id:"ad_astra:space_suit"}}] Item.tag.OUUID[3] int 1 as @s run data get entity @s UUID[3]

summon item ~ ~ ~ {Item:{id:"ad_astra:space_pants",Count:1b,tag:{Soulbound:1b,Owner:0,OUUID:[I;0,0,0,0]}},PickupDelay:1,Owner:[I;0,0,0,0]}
execute store result entity @e[sort=nearest,type=item,limit=1,nbt={Item:{id:"ad_astra:space_pants"}}] Item.tag.owner int 1 as @s run scoreboard players get @s id
execute store result entity @e[sort=nearest,type=item,limit=1,nbt={Item:{id:"ad_astra:space_pants"}}] Owner[0] int 1 as @s run data get entity @s UUID[0]
execute store result entity @e[sort=nearest,type=item,limit=1,nbt={Item:{id:"ad_astra:space_pants"}}] Owner[1] int 1 as @s run data get entity @s UUID[1]
execute store result entity @e[sort=nearest,type=item,limit=1,nbt={Item:{id:"ad_astra:space_pants"}}] Owner[2] int 1 as @s run data get entity @s UUID[2]
execute store result entity @e[sort=nearest,type=item,limit=1,nbt={Item:{id:"ad_astra:space_pants"}}] Owner[3] int 1 as @s run data get entity @s UUID[3]
execute store result entity @e[sort=nearest,type=item,limit=1,nbt={Item:{id:"ad_astra:space_pants"}}] Item.tag.OUUID[0] int 1 as @s run data get entity @s UUID[0]
execute store result entity @e[sort=nearest,type=item,limit=1,nbt={Item:{id:"ad_astra:space_pants"}}] Item.tag.OUUID[1] int 1 as @s run data get entity @s UUID[1]
execute store result entity @e[sort=nearest,type=item,limit=1,nbt={Item:{id:"ad_astra:space_pants"}}] Item.tag.OUUID[2] int 1 as @s run data get entity @s UUID[2]
execute store result entity @e[sort=nearest,type=item,limit=1,nbt={Item:{id:"ad_astra:space_pants"}}] Item.tag.OUUID[3] int 1 as @s run data get entity @s UUID[3]

summon item ~ ~ ~ {Item:{id:"ad_astra:space_boots",Count:1b,tag:{Soulbound:1b,Owner:0,OUUID:[I;0,0,0,0]}},PickupDelay:1,Owner:[I;0,0,0,0]}
execute store result entity @e[sort=nearest,type=item,limit=1,nbt={Item:{id:"ad_astra:space_boots"}}] Item.tag.owner int 1 as @s run scoreboard players get @s id
execute store result entity @e[sort=nearest,type=item,limit=1,nbt={Item:{id:"ad_astra:space_boots"}}] Owner[0] int 1 as @s run data get entity @s UUID[0]
execute store result entity @e[sort=nearest,type=item,limit=1,nbt={Item:{id:"ad_astra:space_boots"}}] Owner[1] int 1 as @s run data get entity @s UUID[1]
execute store result entity @e[sort=nearest,type=item,limit=1,nbt={Item:{id:"ad_astra:space_boots"}}] Owner[2] int 1 as @s run data get entity @s UUID[2]
execute store result entity @e[sort=nearest,type=item,limit=1,nbt={Item:{id:"ad_astra:space_boots"}}] Owner[3] int 1 as @s run data get entity @s UUID[3]
execute store result entity @e[sort=nearest,type=item,limit=1,nbt={Item:{id:"ad_astra:space_boots"}}] Item.tag.OUUID[0] int 1 as @s run data get entity @s UUID[0]
execute store result entity @e[sort=nearest,type=item,limit=1,nbt={Item:{id:"ad_astra:space_boots"}}] Item.tag.OUUID[1] int 1 as @s run data get entity @s UUID[1]
execute store result entity @e[sort=nearest,type=item,limit=1,nbt={Item:{id:"ad_astra:space_boots"}}] Item.tag.OUUID[2] int 1 as @s run data get entity @s UUID[2]
execute store result entity @e[sort=nearest,type=item,limit=1,nbt={Item:{id:"ad_astra:space_boots"}}] Item.tag.OUUID[3] int 1 as @s run data get entity @s UUID[3]
tag @s add StartingItems