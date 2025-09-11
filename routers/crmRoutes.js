const express = require("express");
const router = express.Router();

const validateClaim = require ('../validateClaim');

const claims = [
  { id: 'abc123', claimant: 'John Doe', amount: 5000, status: 'pending', submittedAt: '2025-09-01T10:00:00Z' },
  { id: 'def456', claimant: 'Jane Smith', amount: 1200, status: 'approved', submittedAt: '2025-09-02T14:30:00Z' }
];

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


})

module.exports = router;