# Description
#  We actually dont know why he hates cupcakes

module.exports = (robot) ->

  ireallyhatecupcakes = [
    "Don't. Just don't.",
    "Really? You're going to press this issue?",
    "Please.",
    "Don't you think they're disgusting too?",
    "We've been over this",
    "Seriously?"
  ]

  robot.respond /why do you hate cupcakes/, (res) ->
    res.send res.random ireallyhatecupcakes
