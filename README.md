# CONCAT Calculator
Due to MIFID reporting regulations which came into effect in January 2018 by ESMA, I had to make an update to one of my clients web applications which allowed users to generate a CONCAT if they had no other suitable form of identity such as a passport or NINO.

I was surprised there was no service to generate these (that I could find at the time) and the logic to generate them were somewhat tedious and overly complex. The best article I could find to define the logic was at [CONCAT Logic](https://www.kaizenreporting.com/camels-horses-problem-identifiers-mifid-ii/).

This is a vanilla js function to perform the CONCAT calculation.