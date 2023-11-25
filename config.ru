use Rack::Static, urls: [""], root: "docs", index: "index.html"
run Proc.new { |env|
  puts "the app is working"
  [ '200',
    {'Content-Type' => 'text/html'},
    [File.read("tmp/spec_client_dist/index.html")]
  ]
}
