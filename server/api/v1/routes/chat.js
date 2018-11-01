const router = require("express").Router()
const passport = require("../auth")
const { db } = require("../../../utils")

//----------------------------------------------------------------------------------------------------------
//Endpoints
//----------------------------------------------------------------------------------------------------------

/**
 * @swagger
 * api/v1/chat/message:
 *   post:
 *     tags:
 *       - name: message
 *     description: message
 *     produces:
 *       - application/json
 *     parameters:
 *     responses:
 *       200:
 *         description: it works!
 */
router.post(
  "/message",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    message().then(result => {
      res.status(200).send(result)
    })
  }
)

/**
 * @swagger
 * message():
 *
 */
message = () => {
  return new Promise((resolve, reject) => {
    /* TODO - write message function */
    resolve()

    /* TODO - handle message error
                        reject({message: "error"})
                    */
  })
}
