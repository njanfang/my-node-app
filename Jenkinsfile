
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
                    sh 'pm2 start ecosystem.config.js'
                }
            }
        }
        stage('Deploy with PM2') {
            steps {
                // Deploy using PM2
                sh '''
                export pm2_home=/var/lib/jenkins/.pm2
                if pm2 describe njanfang > /dev/null; then
                  pm2 reload njanfang --update-env
                else
                  pm2 start npm --name "njanfang" -- start
                fi
                pm2 save
                '''
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
