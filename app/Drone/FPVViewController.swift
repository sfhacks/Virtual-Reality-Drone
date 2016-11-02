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
        
        let url = URL(string: "http://192.168.1.3:3000")!
        webView.loadRequest(URLRequest(url: url))
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }

}
