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

        stage('Deploy') {
            steps {
                script {
                    sh 'cp -r * /var/lib/jenkins/workspace/my-node-app'
                    sh 'cd /var/lib/jenkins/workspace/my-node-app'
                    sh 'pm2 start ecosystem.config.js'
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
