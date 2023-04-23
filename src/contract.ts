import { BigInt } from "@graphprotocol/graph-ts"

import {
  ClaimToken, UpdateRoot
} from "../generated/Contract/Contract"
import { Claim, UpdateRootHistory } from "../generated/schema"

export function handleClaimToken(event: ClaimToken): void {
  let entity = Claim.load(event.transaction.hash.toHex())

  if (!entity) {
    entity = new Claim(event.transaction.hash.toHex())
  }

  entity.amount = event.params.claimed;
  entity.user = event.params.user;
  entity.allocation_type = event.params.allocationType;
  entity.created_at = event.block.timestamp;
  entity.block_number = event.block.number;
  entity.investor_id = event.params.id;

  entity.save()
}

export function handleUpdateRoot(event: UpdateRoot): void {
  let entity = UpdateRootHistory.load(event.transaction.hash.toHex())

  if (!entity) {
    entity = new UpdateRootHistory(event.transaction.hash.toHex())
  }
  entity.created_at = event.block.timestamp;
  entity.block_number = event.block.number;
  entity.save()
}
