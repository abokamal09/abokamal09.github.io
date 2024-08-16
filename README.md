<div style="text-align: center;">

# AboKamal Blog <img src="./docs/logo.png" style="width: 25px">

![](./docs/assets/banner.png)
</div>

## About Blog
An attempt to share technical content in Arabic, while continuing to develop my personal skills and share everything new I learn in a dedicated reference, away from the clutter of social media.

## Project structure

    mkdocs.yml    # The configuration file.
    docs/
        index.md  # The blog homepage.
        /about    # About me and blog.
        /blog     # All content of my blog.
        /assets   # Assets of website.

    requirements.txt # All python used packages.

## Getting Started
### Prerequisites
- Python
- MkDocs 
- MkDocs Material 
- MkDocs Material Extensions
- MkDocs Glightbox

### Installation
1. Clone this repository to your local machine:
    ```shell
    git clone https://github.com/abokamal09/abokamal09.github.io.git
    ```

2. Navigate to the project directory:  
    ```shell
    cd abokamal09.github.io
    ```

3. Create python virtual environment:  
    ```shell
    python -m venv venv
    ```

4. Active your virtual environment:  
    Windows:  
    ```shell
    .\venv\Scripts\activate
    ```  
    Linux:  
    ```shell
    source ./venv/bin/activate
    ```
    
    If you see (venv) before the path, your environment is activated correctly.

5. Install nessery packages
    ```shell
    pip intsll -r requirements.txt
    ```

6. Now lets check our blog
    ```shell
    mkdocs serve
    ```
    go to  http://127.0.0.1:8000/ to show blog content

### Contributing
Feel free to fork this repository and submit pull requests. For major changes, please open an issue to discuss what you would like to change.

### Contact
If you have any questions or issues, please open an issue on this repository or contact 
- mail: abokamal.dev@gmail.com