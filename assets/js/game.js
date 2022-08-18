var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName) {
// Alert players that they are starting the round
    window.alert("The fight has begun!");
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    console.log(promptFight);
    if (promptFight === "FIGHT" || promptFight === "fight") {
        // remove enemy's health by subtracting playerAttack from enemyHealth
        enemyHealth = enemyHealth - playerAttack;
        console.log(
            playerName + " attacked " + enemyNames[i] + ". " + enemyNames[i] + " now has " + enemyHealth + " health remaining."
        );
        // check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyNames[i] + " has died!");
        }
        else {
            window.alert(enemyNames[i] + " still has " + enemyHealth + " health left.");
        }
        // subtract enemyAttack from playerHealth
        playerHealth = playerHealth - enemyAttack;
        // Log a resulting message to the console so we know that it worked.
        console.log(
            enemyNames + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );
        // check player's health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
        }
        else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    }
    else if (promptFight === "SKIP" || promptFight === "skip") {
        // confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to skip?");
        // if yes (true) then leave fight
        if(confirmSkip) {
        window.alert(playerName + " has chosen to skip the fight. Goodbye!");
        playerMoney = playerMoney - 2;
        }
        // if no (false) ask question again by running fight () again
        else {
            fight();
        }
    }
    else {
        window.alert("You must choose either 'FIGHT' or 'SKIP' to continue. Please try again.");
        fight();
    }
}

for(var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
}
