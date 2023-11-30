let express=require('express')
const { postDonationCampaign, getDonationCampaigns,getDonationCampaign,updateDonationCampaign,updateDonationCampaignStatus,getAllDonationCampaigns } = require('../../api/donation/donationCampaign')
const verifyToken = require('../../middleware/auth/VerifyToken')
const { topDonations, donationsById } = require('../../api/donation/donation')
let router=express.Router()


router.post('/api/donation_campaign',postDonationCampaign)
router.get('/api/donation_campaign',verifyToken,getDonationCampaigns)
router.get('/api/donation_campaigns',verifyToken,getAllDonationCampaigns)
router.get('/api/donation_campaign/:id',verifyToken,getDonationCampaign)
router.patch('/api/donation_campaign/update/:id',verifyToken,updateDonationCampaign)
router.patch('/api/donation_campaign/updates/status/:id',verifyToken,updateDonationCampaignStatus)



// after donation 


router.get('/api/top_donation',topDonations)
router.get('/api/campaign/donations/:id',donationsById)

module.exports=router