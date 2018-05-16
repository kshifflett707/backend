pragma solidity ^0.4.23;

// Users should be able to store bounties on their questions
// Only our server should be able to submit more questions in contention for the bounty
// users should be able to vote on their favorite questions if approved by users
// at a certain time the votes should end and the payout should be payed out to the questions address
// Should there be a different contract for each contract?  Don't know the overhead with making contracts

contract Question {
  
    // by default questions will be open for one day
    uint duration = 1 days;
    uint endTime = uint32(now + duration);
    // how much the quesiton is worth.  Data type should be?
    uint bounty;
    address asker;

    bool ended;

    event QuestionEnded(address winner, uint amount);

    // the Anwer struct stores information about individual answers submitted. 
    struct Answer {
        // the address the payout will go to should this answer win
        address answerOwner;
        // how many upvotes and downvotes a question has
        uint16 upvotes;
        uint16 downvotes;
    }

    // a structure representing a vote
    struct Vote {
        // address of the person who cast the vote
        address voteOwner;
        // id of the answer they voted for
        uint16 id;
        // might need more
    }

    // we want to store the answers in an array
    Answer[] public answers;
    
    // find sthe best answer.  Best practice for modifiers?
    function _bestAnswer() private returns (address) {
      
    }

    // allows a user to submit a new answer at a cost that will be added to the bounty
    function newAnswer(address answerOwner) public {

    }

    // allows users to upvote the answer at a cost
    function upvote(address voteOwner) public {

    }

    // allows users to downvote the answer at a cost
    function downvote(address voteOwner) public {
      
    }

    // allows both the questionAsker and anybody else to increase bounty
    // takes form of a downvote on the site
    function increaseBounty() public {

    }

    // allows the question answer or us to extend the deadline of the question
    function extendEndTime() public {

    }

    // pays out people who upvoted the best answer
    function _payoutUpvotes() private {

    }

    function questionEnd() public {
        // conditions
        // security problem with using now?
        require(now >= endTime);
        
        // effects
        ended = true;
        emit QuestionEnded(_bestAnswer(), bounty);

        // interactions
        // transfer the amount to the best answer
        address _winner = _bestAnswer();
        winner.transfer(bounty / 2);
        _payoutUpvotes();
    }
    
    /*
     *
     *
     *
     * everything below is what gives us ownership of the contract and could be moved to a seperate contract
     * and instead inhereted 
     * this is our address and unique to us
     *
     *
     *
     *
     *
     */

    // note we are the owner not the actual person who posted the question
    address public owner;

    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);

    // this modifier makes it so some functions can only be called by us
    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }

    // allows us to transfer ownership to a different address should we want to
    function transferOwnership(address newOwner) public onlyOwner {
        require(newOwner != address(0));
        emit OwnershipTransferred(owner, newOwner);
        owner = newOwner;
    }

    // constructor function runs when contract is created
    constructor() public {
        owner = msg.sender;
    }
}
