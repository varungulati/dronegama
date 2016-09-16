# Installing and Setting up the Virtual Environment
reference: [Virtual Environment Setup tutorial](http://docs.python-guide.org/en/latest/dev/virtualenvs/) 

1. Download virtual environment using `pip install virtualenv`.
2. Go to your Project home and create a virtual environment using the following command `virtualenv venv`
 The virtual environment `venv` will be a completely fresh environment that will be shielded from everything install in the local environment
3. Activate the virtual environment 'source venv/bin/activate'
4. Install the following packages in the virtual environment with the following versions
    * Install python version `2.7`
    * `pip install django` to install the Django framework. We are currently using `version 1.10.1`. run `django-admin --version` to confirm that the same version has been installed
    * `pip install djangorestframework` to install Django Rest Framework
    * `pip install psycopg2` to install psycopg2. Psycopg2 is Postgres Driver for python
    * run `pip freeze > requirement.txt` to generate the requrements.txt file with all the pacakges and versions installed. The requirements file looks like this:
    
    ```
    Django==1.10.1 
    djangorestframework==3.4.6
    psycopg2==2.6.2
    ```


