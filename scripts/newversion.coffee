# Description
#  Listens for version changes and responds accordingly

module.exports = (robot) ->

  robot.hear /New tag.*\d\.\d\.\d/, (res) ->
    res.reply "http://open.spotify.com/track/0gcPlCmT36t4uzSwlIrfQh"
