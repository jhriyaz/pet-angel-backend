let express=require('express')
const { postDonationCampaign, getDonationCampaigns,getDonationCampaign,updateDonationCampaign,updateDonationCampaignStatus,getAllDonationCampaigns } = require('../../api/donation/donationCampaign')
const verifyToken = require('../../middleware/auth/VerifyToken')
let router=express.Router()


router.post('/api/donation_campaign',postDonationCampaign)
router.get('/api/donation_campaign',verifyToken,getDonationCampaigns)
router.get('/api/donation_campaigns',verifyToken,getAllDonationCampaigns)
router.get('/api/donation_campaign/:id',verifyToken,getDonationCampaign)
router.patch('/api/donation_campaign/update/:id',verifyToken,updateDonationCampaign)
router.patch('/api/donation_campaign/updates/status/:id',verifyToken,updateDonationCampaignStatus)



module.exports=router