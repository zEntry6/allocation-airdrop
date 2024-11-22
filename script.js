function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.add('hidden');
    });
    document.getElementById(sectionId).classList.remove('hidden');
}

function calculateAirdrop() {
    const totalTokens = parseFloat(document.getElementById('totalTokens').value);
    const percentageForCommunity = parseFloat(document.getElementById('percentageCommunity').value);
    const totalParticipants = parseInt(document.getElementById('totalParticipants').value);

    if (isNaN(totalTokens) || isNaN(percentageForCommunity) || isNaN(totalParticipants) || 
        percentageForCommunity <= 0 || percentageForCommunity > 100 || totalParticipants <= 0) {
        document.getElementById('airdropResult').textContent = "Invalid input! Make sure the percentage is between 0-100.";
        return;
    }

    const communityAllocation = totalTokens * (percentageForCommunity / 100);
    const allocationPerParticipant = communityAllocation / totalParticipants;

    // Menampilkan hasil per paragraf terpisah
    document.getElementById('airdropResult').innerHTML = 
        `<p>Total allocation to communities: ${communityAllocation.toFixed(2)} token.</p>
         <p>Each participant gets: ${allocationPerParticipant.toFixed(2)} token.</p>`;
}




function predictPrice() {
    const marketCap = parseFloat(document.getElementById('marketCap').value);
    const totalSupply = parseFloat(document.getElementById('totalSupply').value);

    if (isNaN(marketCap) || isNaN(totalSupply) || totalSupply <= 0) {
        document.getElementById('predictResult').textContent = "Invalid input!";
        return;
    }

    const price = marketCap / totalSupply;
    document.getElementById('predictResult').textContent = `Listing price prediction: $${price.toFixed(4)} USD/token`;
}
