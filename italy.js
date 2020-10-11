player.onChat("base", function () {
    blocks.fill(
    BLACK_WOOL,
    pos(50, 10, 50),
    pos(200, 10, 200),
    FillOperation.Replace
    )
})
player.onChat("itary", function () {
    agent.setItem(LIME_TERRACOTTA, 6, 1)
    agent.setItem(BLOCK_OF_QUARTZ, 6, 2)
    agent.setItem(RED_WOOL, 6, 3)
    agent.setItem(AIR, 1, 4)
    agent.setAssist(PLACE_ON_MOVE, true)
    for (let index = 0; index < 2; index++) {
        agent.setSlot(1)
        agent.move(FORWARD, 2)
        agent.setSlot(2)
        agent.move(FORWARD, 2)
        agent.setSlot(3)
        agent.move(FORWARD, 2)
        agent.setSlot(4)
        agent.move(UP, 1)
        agent.turn(LEFT_TURN)
        agent.turn(LEFT_TURN)
        agent.move(FORWARD, 1)
        agent.setSlot(3)
        agent.move(FORWARD, 2)
        agent.setSlot(2)
        agent.move(FORWARD, 2)
        agent.setSlot(1)
        agent.move(FORWARD, 2)
        agent.setSlot(4)
        agent.move(UP, 1)
        agent.turn(LEFT_TURN)
        agent.turn(LEFT_TURN)
        agent.move(FORWARD, 1)
    }
})
player.onChat("tp", function () {
    agent.teleportToPlayer()
})
