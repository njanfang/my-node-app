
pipeline {
    agent any
    
   /*** environment {
        // Define any environment variables here, such as Node version or PM2 path
        NODE_HOME = '/usr/local/bin'
    }
***/
    stages {
        stage('Clone Repository') {
            steps {
                // Checkout your repository
                git branch: 'main', url: 'https://github.com/njanfang/my-node-app.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                // Install the required dependencies
                script {
                    sh 'npm install'
                }
            }
        }

        stage('Test') {
            steps {
                // Run tests (optional)
                script {
                    sh 'npm test'
                }
            }
        }

        stage('Deploy') {
            steps {
                // Deploy using PM2
                script {
                    // Ensure PM2 is installed and running
                    //sh 'pm2 install pm2-logrotate' // Optional: for log rotation in PM2
                    sh 'pm2 start ecosystem.config.js' // Use your PM2 configuration file
                }
            }
        }

        stage('Clean Up') {
            steps {
                // Clean up any running processes if needed
                script {
                    sh 'pm2 delete all'  // Deletes all processes (optional)
                }
            }
        }
    }

    post {
        always {
            // Notify on success or failure (optional)
            echo 'Job finished'
        }
    }
}
