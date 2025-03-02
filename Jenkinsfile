pipeline {
    agent any

    environment {
        NODE_HOME = '/usr/local/bin'
    }

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/njanfang/my-node-app.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    sh 'npm install'
                }
            }
        }

        // Optional: Comment out or remove the Test stage if not using tests
        /*
        stage('Test') {
            steps {
                script {
                    sh 'npm test'
                }
            }
        }
        */
         stage('Move to /var/my-node-app') {
            steps {
                script {
                    // Move the repository from Jenkins workspace to /var/my-node-app
                    sh 'mv $WORKSPACE/* /var/my-node-app/'
                }
            }
        }
         stage('Deploy') {
            steps {
                script {
                    // Deploy the application with PM2
                    sh 'pm2 start /var/my-node-app/ecosystem.config.js'
                }
            }
        }
        
        
        stage('Clean Up') {
            steps {
                script {
                    sh 'pm2 delete all'
                }
            }
        }
    }

    post {
        always {
            echo 'Job finished'
        }
    }
}
