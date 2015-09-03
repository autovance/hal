# Description
#  We actually dont know why he hates cupcakes

module.exports = (robot) ->

  ireallyhatecupcakes = [
    "Don't. Just don't.",
    "Really? You're going to press this issue?",
    "Please.",
    "Don't you think they're disgusting too?",
    "We've been over this",
    "Seriously?",
    "Don't take me for a chump",
    "The luck, you're pushing it",
  ]

  robot.respond /(.*)(why do you hate cupcakes)(.*)/i, (res) ->
    res.send res.random ireallyhatecupcakes
