# fluid-subgraph

Example query ClaimHistory: 
{
  claims {
    id
    user
    amount
    block_number
    created_at
  }
}



Example query UpdateRootHistory: 
{
  updateRootHistories {
    id
    block_number
    created_at
  }
}
