scoreboard objectives add id dummy
execute unless score id id matches -2147483648..2147483647 run scoreboard players set id id 0
scoreboard objectives add Deaths deathCount
scoreboard objectives setdisplay list Deaths
scoreboard objectives add Health health {"text":"❤","color":"red"}
scoreboard objectives setdisplay belowName Health