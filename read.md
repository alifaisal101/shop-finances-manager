Shop Finances Manager, is a special project, designed and programmed for the exact need of the client.
The project is a desktop app, with the purpose of helping the client, to manage his financial data and automate his day-to-day calculations.

The development plan:

The project aims to be developed on two phases, and to be finished before February of 2024, or in the first few days.

    - The first phase
    The first phase aims to focus on the illustration aspect of the project, meaning, specifically, the UI, the plan and parts of the frontend.

    UI, means, the entirity of the frontend, in a stateless view, mainly focusing on the CSS and HTML side of things.
    Plan, means, an explaination on how the end project will be, with the help of the UI, to make it more clear, what the client will be receiving at the end.
    Parts of the frontend, meaning some parts of the logic, where they're needed, to help illustrate the functionality of some features.

    The point of this phase is for the client to have a a clear picture on what will he be getting, and to help us avoid not meeting his expectations.

    - The second phase
    The second phase aims to finish the project, entirely, and installing it to the client.

The features plan:
The project aims to provide a simple and reliable way of allowing the user to register there financial data, and automates the calculations for the user,
to help them maintain a reliable record of their payments, and financial records, and to generate a a simple and informative daily report, containing all
the information about the transactions.

    The project can be divided into 3 main features:

    A - Daily Budget
        The daily budget consists of the budget of today, and a list of all the budgets registered before, with the ability to print the report for any of them
    B - Earnings
        The earnings add a suprplus to the daily budget. Earning currently consists of two tables of data:
        1 - The daily earning:
            the daily earning is, the amount of money given to the user from the managment, which will be spent on the "spendings", this money will be added as the surplus base for the daily budget.
            There should be a table consisting of all the previous registered earnings, and the one for the today.

        2 - The returned products
            Products get returned for several reasons, such as, they are expired, unwanted, broken, or etc.
            There should be a table to register the returns, which most importantaly, consists of the returned amount which will be added as a surplus to the daily budget.

    C - Spendings
        Spendings consists of a suptraction from the daily budget, as the spendings will suptract the spent amount from the daily budget.

        There are types of spendings, and types of how they are registered, some are immediate, which will immediatlally subtract from the daily budget, some are not, and subtract on regular basis.

        Types of spendings data:
        1 - Purchase records:
            Which are records of purchased products, consisting of the spent amount, and the company, the record belongs to.
            Direct purchase records subtracts immediatally from the daily budget, and indirect purchase records, consists of many payments, each subtracts at the time of the payment.

            The user should be able to register the purchase record, the company it belongs to, and whether thay payment is direct or indirect, if its indirect, then the user should be able to register many payment, and add more payments, whenever they like.

        2 - Employee records:
            Which consists of the employees data, and the date of the payment, and their salary. These will be records of employees, and a salary date, at which each time this month and day occors, the salary will be subtracted from the daily budget.

        3 - Other spendings:
            Which are very similar to the purchased records, as they consist of a paid amount and a payment type, whether direct or indirect, but without a company or etc details.\
    
Execution plan:
    The project is a desktop application, therefor, we plan to develop it using Electron. Thus the project execution could be divided into 4 components:

    API/Electron:
        This section is the Electron/API section, meaning the section, which consists of the database models, the controllers,
        the Electron logic for the desktop application. 

        Controllers:

        Models:

        Electron:


    Frontend:
        This section consists of the frontend will function, SPA framework, api calls handling
    UI/UX:
        This consists of the project will function and how it will look like and be used by the client
        UI:

        UX:

    Deployment:
        This section consists of the project will be finizilezed and deployed for the client to be used, including, the database, backup options, updates handling. 
        
        Internet Requirement:

        Database usage and location:

        Backup:

        Updates: 