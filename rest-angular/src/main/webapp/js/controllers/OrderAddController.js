/*
 * $Id$
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
(function() {
    'use strict';

    angular
        .module('app')
        .controller('OrderAddController', OrderAddController);

    function OrderAddController($log, $location, DataService) {
        var vm = this;
        vm.mode = "Add";
        vm.errors = {};

        // new model with default values
        vm.order = {id: null, clientName:"", amount:1};

        vm.submitOrder = function(order){
            vm.errors = {};
            DataService.addOrder(order).then(function(order) {
                vm.order = order;
                $location.path("/orders");
            }, function(errors) {
                $log.error('Could not add new order');
                vm.errors = errors;
            });
        };
    }
})();