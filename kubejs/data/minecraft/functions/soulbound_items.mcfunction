data merge entity @s {Owner:[I;0,0,0,0],PickupDelay:1}
execute store result entity @s Owner[0] int 1 as @s run data get entity @s Item.tag.OUUID[0]
execute store result entity @s Owner[1] int 1 as @s run data get entity @s Item.tag.OUUID[1]
execute store result entity @s Owner[2] int 1 as @s run data get entity @s Item.tag.OUUID[2]
execute store result entity @s Owner[3] int 1 as @s run data get entity @s Item.tag.OUUID[3]
tp @s @p[distance=..0.1] 