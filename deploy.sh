#!/bin/bash
# Define a function to handle the keyboard interrupt signal
function handle_interrupt {
    echo "^C received. Exiting..."
    exit 1
}
# Trap the keyboard interrupt signal and associate it with the handle_interrupt function
trap handle_interrupt SIGINT
# real codes
echo "Syncing with s3..."
aws s3 sync out/ s3://awscmd.tw-migration
echo "Updating locales..."
aws s3 cp s3://awscmd.tw-migration/jp.html s3://awscmd.tw-migration/jp --content-type "text/html" --metadata-directive "REPLACE"
aws s3 rm s3://awscmd.tw-migration/jp.html
aws s3 cp s3://awscmd.tw-migration/en.html s3://awscmd.tw-migration/en --content-type "text/html" --metadata-directive "REPLACE"
aws s3 rm s3://awscmd.tw-migration/en.html
echo "Invalidating CloudFront..."
aws cloudfront create-invalidation --distribution-id E2FYOFED7YP5FT --paths "/" "/en" "/jp"