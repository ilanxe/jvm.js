const AbstractInstruction = require('./AbstractInstruction');

export default class AbstractBranchInstruction extends AbstractInstruction {

  constructor(idx, opcode) {
    super(idx, opcode);
    this.branchOffset = 0;
  }

  get totalOffset() {
    return this.idx + this.branchOffset;
  }
}