//
//  FPVViewController.swift
//  Drone
//
//  Created 4/16/2016.
//  Copyright © 2016 VR Drone, et. al. All rights reserved.
//

import UIKit

class FPVViewController: UIViewController {

    @IBOutlet weak var webView: UIWebView!
    override func viewDidLoad() {
        super.viewDidLoad()
        
        let url = NSURL(string: "http://192.168.1.2:3000")!
        //let url = NSURL(string: "https://www.google.com")!
        webView.loadRequest(NSURLRequest(URL: url))
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }

}
