const express = require("express");
const router = express.Router();
const axios = require('axios');

const validateClaim = require ('../validateClaim');

const claims = [
  { id: 'abc123', claimant: 'John Doe', amount: 5000, status: 'pending', submittedAt: '2025-09-01T10:00:00Z' },
  { id: 'def456', claimant: 'Jane Smith', amount: 1200, status: 'approved', submittedAt: '2025-09-02T14:30:00Z' }
];


// I will create another endpoint to retrieve data from mogoDB
router.get('/lookupClaim/:id', (req, res) => {
  const { id } = req.params;
  const claim = claims.find(claim => claim.id === id);

  if (!claim) {
    return res.status(400).json({ error: "Can't find the claim" });
  }

  res.json(claim);
});


router.post('/validate-claim', (req, res)=>{

     
      const flag = validateClaim(req.body);
      res.json({flag: flag})


});

// Fetching profile Data from enteranl API 
router.get('/github/user/:username', async (req, res) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${req.params.username}`);
    res.json(response.data);
  } catch (err) {
    console.error('GitHub API error:', err.message); // This helps!
    res.status(500).json({ error: 'Failed to fetch user' });
  }
});



module.exports = router;